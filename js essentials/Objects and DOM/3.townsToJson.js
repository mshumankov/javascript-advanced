function townsToJson(input) {
    input.shift();

    let townsArr = [];

    for (let line of input) {
        const splited = line.substr(2, line.length - 4).split(' | ');


        const town = splited[0];
        const latitude = Number(splited[1]);
        const Longitude = Number(splited[2]);
        let obj = {};
        obj.Town = town;
        obj.Latitude = latitude;
        obj.Longitude = Longitude;
        townsArr.push(obj);
    }
    const jsonFormat = JSON.stringify(townsArr)
    console.log(jsonFormat);
}
townsToJson(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);