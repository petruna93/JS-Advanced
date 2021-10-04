function solve(aarr) {
    let catalogue = {};

    for (let element of aarr) {

        let [town, product, price] = element.split(' | ');
        price = Number(price);

        if (!catalogue[product]) {
            catalogue[product] = {};
        }
        catalogue[product][town] = price;
    };

    for (element in catalogue) {
        let sorted = Object.entries(catalogue[element]).sort((a, b) => a[1] - b[1]);

        console.log(`${element} -> ${sorted[0][1]} (${sorted[0][0]})`);
    }

}
solve(['Sample Town | Sample Product | 1000',
    'Sample Town | Orange | 2',
    'Sample Town | Peach | 1',
    'Sofia | Orange | 3',
    'Sofia | Peach | 2',
    'New York | Sample Product | 1000.1',
    'New York | Burger | 10'
]);