function attachEvents() {
    const elements = {
        location: document.getElementById('location'),
        button: document.getElementById('submit'),
        currentForecast: document.getElementById('current'),
        divForecast: document.getElementById('forecast'),
        divUpcoming: document.getElementById('upcoming')
    }

    const symbols = {
        sunny: '☀',
        partlySunny: '⛅',
        overcast: '☁',
        rain: '☂',
        degrees: '°'
    }

    elements.button.addEventListener('click', getLocationCode);

    function getLocationCode() {
        fetch('https://judgetests.firebaseio.com/locations.json')
            .then(handler)
            .then(data => {
                const locationObj = data.filter((el) => el.name === elements.location.value)[0];
                const {
                    name,
                    code
                } = locationObj

                showCurrentCondition(code);
            })
    }

    function showCurrentCondition(code) {

        fetch(`https://judgetests.firebaseio.com/forecast/today/${code}.json `)
            .then(handler)
            .then(data => {
                const divForecasts = createHTMLElement('div', 'forecasts');
                const conditionSymbol = symbols[data.forecast.condition.toLowerCase()] || symbols.partlySunny;
                const degrees = `${data.forecast.low}${symbols.degrees}/${data.forecast.high}${symbols.degrees}`;
                const spanConditionSymbol = createHTMLElement('span', ['condition', 'symbol'], conditionSymbol);
                const spanConditionInfo = createHTMLElement('span', 'condition');
                const spanName = createHTMLElement('span', 'forecast-data', data.name);
                const spanDegrees = createHTMLElement('span', 'forecast-data', degrees);
                const spanCondition = createHTMLElement('span', 'forecast-data', data.forecast.condition);

                spanConditionInfo.appendChild(spanName);
                spanConditionInfo.appendChild(spanDegrees);
                spanConditionInfo.appendChild(spanCondition);
                divForecasts.appendChild(spanConditionSymbol);
                divForecasts.appendChild(spanConditionInfo);
                elements.currentForecast.appendChild(divForecasts);

                elements.divForecast.style.display = 'block';

                showUpcomingCondition(code)
            })
    }

    function showUpcomingCondition(code) {
        fetch(`https://judgetests.firebaseio.com/forecast/upcoming/${code}.json`)
            .then(handler)
            .then(data => {
                const divForecasts = createHTMLElement('div', 'forecast-info');


                for (const forecast of data.forecast) {
                    const conditionSymbol = symbols[forecast.condition.toLowerCase()] || symbols.partlySunny;
                    const degrees = `${forecast.low}${symbols.degrees}/${forecast.high}${symbols.degrees}`;

                    const spanUpcoming = createHTMLElement('span', 'upcoming');
                    const spanConditionSymbol = createHTMLElement('span', 'symbol', conditionSymbol);
                    const spanDegrees = createHTMLElement('span', 'forecast-data', degrees);
                    const spanCondition = createHTMLElement('span', 'forecast-data', forecast.condition);

                    spanUpcoming.appendChild(spanConditionSymbol);
                    spanUpcoming.appendChild(spanDegrees);
                    spanUpcoming.appendChild(spanCondition);
                    divForecasts.appendChild(spanUpcoming);
                }
                elements.divUpcoming.appendChild(divForecasts);

            })
    }

    function createHTMLElement(elementTag, className, content) {
        let element = document.createElement(elementTag);

        if (className) {
            if (typeof className === 'string') {
                element.classList.add(className);
            } else {
                element.classList.add(...className);
            }

        }

        if (content) {
            element.textContent = content;
        }

        return element;
    }

    function handler(response) {
        if (response.status > 400) {
            throw new Error(`Error: ${response.statusText}`);
        }

        return response.json();
    }
}

attachEvents();