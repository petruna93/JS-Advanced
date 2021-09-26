function solve(a) {
    let maxNum = Number.NEGATIVE_INFINITY;

    for (let row = 0; row < a.length; row++) {
        for (let col = 0; col < a[row].length; col++) {
            let num = a[row][col];
            maxNum = Math.max(maxNum, num);
        }
    }
    return (maxNum);
}

solve([
    [20, 50, 10],
    [8, 33, 145]
]);
solve([
    [3, 5, 7, 12],
    [-1, 4, 33, 2],
    [8, 3, 0, 4]
]);