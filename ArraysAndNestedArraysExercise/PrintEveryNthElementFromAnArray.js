function solve(a, b) {
    let result = [];
    for (let i = 0; i < a.length; i += b) {
        result.push(a[i]);
    }
    console.log(result.join());
}
solve(['5',
        '20',
        '31',
        '4',
        '20'
    ],
    2
);
solve(['dsa',
        'asd',
        'test',
        'tset'
    ],
    2
);
solve(['1',
        '2',
        '3',
        '4',
        '5'
    ],
    6
);