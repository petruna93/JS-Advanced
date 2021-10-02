function CalorieObject(array) {
    let result = {};
    for (let i = 0; i < array.length - 1; i += 2) {
        let foodName = array[i];
        let calories = Number(array[i + 1]);

        result[foodName] = calories;
    }


    console.log(result);
}

CalorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);
CalorieObject(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);