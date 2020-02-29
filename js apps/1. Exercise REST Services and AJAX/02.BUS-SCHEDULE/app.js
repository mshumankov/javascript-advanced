function solve() {
    let busInfo = document.querySelector('#info span');
    let currentStop = 'depot';
    let stopName = '';
    let url = `https://judgetests.firebaseio.com/schedule/${currentStop}.json`;
    const btnDepart = document.getElementById('depart');
    const btnArrive = document.getElementById('arrive');


    function depart() {
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                stopName = data.name;
                busInfo.textContent = `Next stop ${stopName}`;
                currentStop = data.next;
                url = `https://judgetests.firebaseio.com/schedule/${currentStop}.json`
                btnDepart.setAttribute('disabled', '');
                btnDepart.disabled = true;
                btnArrive.disabled = false;
            })
    }

    function arrive() {
        busInfo.textContent = `Arriving at ${stopName}`;
        btnDepart.disabled = false;
        btnArrive.disabled = true;
    }



    return {
        depart,
        arrive
    };
}

let result = solve();