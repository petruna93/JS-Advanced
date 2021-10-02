function townPopulation(array) {
    let towns = {};

    for (let i = 0; i < array.length; i++) {
        let tokens = array[i].split(' <-> ');
        let name = tokens[0];
        let population = Number(tokens[1]);

        if (towns[name] == undefined) {
            towns[name] = population;
        } else {
            towns[name] += population;
        }
    }


    for (let name in towns) {
        console.log(`${name} : ${towns[name]}`);
    }
}


townPopulation(['Sofia <-> 1200000',
    'Montana <-> 20000',
    'New York <-> 10000000',
    'Washington <-> 2345000',
    'Las Vegas <-> 1000000'
]);
townPopulation(['Istanbul <-> 100000',
    'Honk Kong <-> 2100004',
    'Jerusalem <-> 2352344',
    'Mexico City <-> 23401925',
    'Istanbul <-> 1000'
]);