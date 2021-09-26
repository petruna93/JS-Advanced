function solve(a) {
    let firstSum = 0;
    let secondSum = 0;


    for (let row = 0; row < a.length; row++) {
        let num = Number(a[row][row]);
        firstSum += num;
    }
    for (let row = 0; row < a.length; row++) {
        let num = Number(a[row][(a.length - 1) - row]);
        secondSum += num;
    }
    console.log(firstSum + " " + secondSum);
}


solve([
    [20, 40],
    [10, 60]
]);
solve([
    [3, 5, 17],
    [-1, 7, 14],
    [1, -8, 89]
]);