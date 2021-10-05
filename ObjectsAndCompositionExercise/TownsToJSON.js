function solve(arr) {
    let title = arr.shift();
    let newArray = [];

    for (let x of arr) {
        let [town, latitude, longitude] = x.split(" | ");
        latitude = Number(latitude).toFixed(2);

        let newObject = {};
        town = town.split("| ");
        town = town[1];
        longitude = longitude.split(" |");
        longitude = longitude[0];
        longitude = Number(longitude).toFixed(2);

        newObject['Town'] = town;
        newObject['Latitude'] = Number(latitude);
        newObject['Longitude'] = Number(longitude);
        newArray.push(newObject);
    }
    return (JSON.stringify(newArray));








}
solve(['| Town | Latitude | Longitude |',
    '| Sofia | 42.696552 | 23.32601 |',
    '| Beijing | 39.913818 | 116.363625 |'
]);