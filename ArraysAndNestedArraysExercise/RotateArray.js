function solve(a, b) {
    for (let i = 0; i < b; i++) {
        let element = a.pop();
        a.unshift(element);
    }
    console.log(a.join(" "));

}
solve(['1',
        '2',
        '3',
        '4'
    ],
    2
);
solve(['Banana',
        'Orange',
        'Coconut',
        'Apple'
    ],
    15
);