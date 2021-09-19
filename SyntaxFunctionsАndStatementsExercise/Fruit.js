function fruit(fruit, weight, price) {
    let kilogram = weight / 1000
    let neededSum = kilogram * price;

    console.log(`I need $${neededSum.toFixed(2)} to buy ${kilogram.toFixed(2)} kilograms ${fruit}.`);

}

fruit('orange', 2500, 1.80);
fruit('apple', 1563, 2.35);