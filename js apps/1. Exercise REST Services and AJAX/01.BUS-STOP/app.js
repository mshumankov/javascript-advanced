function getInfo() {
    const stopId = document.getElementById('stopId').value;
    const stopName = document.getElementById('stopName');
    const buses = document.getElementById('buses');
    let url = `https://judgetests.firebaseio.com/businfo/${stopId}.json `;

    fetch(url)
        .then((response) => response.json())
        .then((data) => {

            buses.innerHTML = '';
            const name = data.name;
            const busInfo = data.buses;

            stopName.textContent = name;

            for (const bus in busInfo) {
                const listItem = document.createElement('li');
                listItem.textContent = `Bus ${bus} arrives in ${busInfo[bus]}`;
                buses.appendChild(listItem);
            }
        })
        .catch(error => {
            //buses.innerHTML = '';
            document.getElementById('stopName').textContent = 'Error';
        })
}