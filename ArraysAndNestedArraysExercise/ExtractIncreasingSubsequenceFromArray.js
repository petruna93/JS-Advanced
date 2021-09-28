function solve(a) {
    let result = [];
    result.push(a[0]);
    let num = Number(a[0]);

    for (let i = 1; i < a.length; i++) {
        if (a[i] >= num) {
            num = a[i];
            result.push(num);
        } else {
            continue;
        }
    }
    return result;
}

solve([1,
    3,
    8,
    4,
    10,
    12,
    3,
    2,
    24
]);
solve([1,
    2,
    3,
    4
]);
solve([20,
    3,
    2,
    15,
    6,
    1
]);