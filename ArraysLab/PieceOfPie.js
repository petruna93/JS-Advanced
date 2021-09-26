function solve(a, b, c) {
    let firstIndex = a.indexOf(b);
    let secondIndex = a.lastIndexOf(c);
    let array = [];

    for (let i = firstIndex; i <= secondIndex; i++) {
        let element = a[i];
        array.push(element);
    }
    return (array);




}
solve(['Pumpkin Pie',
        'Key Lime Pie',
        'Cherry Pie',
        'Lemon Meringue Pie',
        'Sugar Cream Pie'
    ],
    'Key Lime Pie',
    'Lemon Meringue Pie'
);

solve(['Apple Crisp',
        'Mississippi Mud Pie',
        'Pot Pie',
        'Steak and Cheese Pie',
        'Butter Chicken Pie',
        'Smoked Fish Pie'
    ],
    'Pot Pie',
    'Smoked Fish Pie'
);