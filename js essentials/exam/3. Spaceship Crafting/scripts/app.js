function spaceshipCrafting() {
	let resource = {};
	resource.titanium = Number(document.getElementById('titaniumCoreFound').value);
	resource.aluminium = Number(document.getElementById('aluminiumCoreFound').value);
	resource.magnesium = Number(document.getElementById('magnesiumCoreFound').value);
	resource.carbon = Number(document.getElementById('carbonCoreFound').value);
	let lost = Number(document.getElementById('lossesPercent').value) / 4;

	countLosses();

	let bars = {};
	bars.titaniumBars = Math.round(resource.titanium / 25);
	bars.aluminiumBars = Math.round(resource.aluminium / 50);
	bars.carbonBars = Math.round(resource.carbon / 100);
	bars.magnesiumBars = Math.round(resource.magnesium / 75);



	let falseFleatCheck = true;
	let ships = {
		undefinedShip: 0,
		nullMaster: 0,
		jsonCrew: 0,
		falseFleat: 0
	};

	while (falseFleatCheck === true) {
		if (bars.titaniumBars >= 7 && bars.aluminiumBars >= 9 && bars.magnesiumBars >= 7 && bars.carbonBars >= 7) {
			ships.undefinedShip++;
			bars.titaniumBars -= 7;
			bars.aluminiumBars -= 9;
			bars.magnesiumBars -= 7;
			bars.carbonBars -= 7;
		}
		if (bars.titaniumBars >= 5 && bars.aluminiumBars >= 7 && bars.magnesiumBars >= 7 && bars.carbonBars >= 5) {
			ships.nullMaster++;
			bars.titaniumBars -= 5;
			bars.aluminiumBars -= 7;
			bars.magnesiumBars -= 7;
			bars.carbonBars -= 5;
		}
		if (bars.titaniumBars >= 3 && bars.aluminiumBars >= 5 && bars.magnesiumBars >= 5 && bars.carbonBars >= 2) {
			ships.jsonCrew++;
			bars.titaniumBars -= 3;
			bars.aluminiumBars -= 5;
			bars.magnesiumBars -= 5;
			bars.carbonBars -= 2;
		}
		if (bars.titaniumBars >= 2 && bars.aluminiumBars >= 2 && bars.magnesiumBars >= 3 && bars.carbonBars >= 1) {
			ships.falseFleat++;
			bars.titaniumBars -= 2;
			bars.aluminiumBars -= 2;
			bars.magnesiumBars -= 3;
			bars.carbonBars -= 1;
		} else {
			falseFleatCheck = false;
		}
	}

	let leftResource = `${bars.titaniumBars} titanium bars, ${bars.aluminiumBars} aluminum bars, ${bars.magnesiumBars} magnesium bars, ${bars.carbonBars} carbon bars`
	document.querySelector('div#availableBars p').textContent = leftResource;

	let printShips = [];

	if (ships.undefinedShip > 0) {
		printShips.push(`${ships.undefinedShip} THE-UNDEFINED-SHIP`);
	}

	if (ships.nullMaster > 0) {
		printShips.push(`${ships.nullMaster} NULL-MASTER`);
	}

	if (ships.jsonCrew > 0) {
		printShips.push(`${ships.jsonCrew} JSON-CREW`);
	}

	if (ships.falseFleat > 0) {
		printShips.push(`${ships.falseFleat} FALSE-FLEET`);
	}

	document.querySelector('div#builtSpaceships p').textContent = printShips.join(', ');

	function countLosses() {
		let lostPercent = lost / 100;


		for (let key in resource) {
			resource[key] -= (resource[key] * lostPercent);
		}
	}

}