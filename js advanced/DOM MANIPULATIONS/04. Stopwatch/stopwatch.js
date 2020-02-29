function stopwatch() {
    selectors = {
        time: 'time',
        startBtn: 'startBtn',
        stopBtn: 'stopBtn'
    }

    getStartBtn = () => {
        const startBtn = document.getElementById(selectors.startBtn);
        return startBtn;
    }

    getStopBtn = () => {
        const stoptBtn = document.getElementById(selectors.stopBtn);
        return stopBtn;
    }

    getTime = () => {
        const time = document.getElementById(selectors.time).textContent;
        return time;
    }

    setTime = () => {
        let time = getTime();
        let [minutes, seconds] = time.split(':');
        seconds = Number(seconds);

        seconds++;

        if (seconds < 10) {
            seconds = '0' + seconds;
        }

        if (seconds > 59) {
            seconds = '00';
            minutes = Number(minutes);
            minutes++;

            if (minutes < 10) {
                minutes = '0' + minutes
            }
        }
        document.getElementById(selectors.time).textContent = `${minutes}:${seconds}`;
    }

    clickedStartBtn = () => {
        timer = setInterval(setTime, 1000);
        start.disabled = 'true';
        stop.removeAttribute('disabled');
    }

    clickedStopBtn = () => {
        clearInterval(timer);
        document.getElementById(selectors.time).textContent = '00:00';
        stop.disabled = 'true';
        start.removeAttribute('disabled');
    }


    const start = getStartBtn();
    const stop = getStopBtn();
    start.addEventListener('click', clickedStartBtn);
    stop.addEventListener('click', clickedStopBtn);
}