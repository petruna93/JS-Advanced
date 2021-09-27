function solve(a) {
    let count = 0;

    for (let row = 0; row < a.length; row++) {
        for (let col = 0; col < a[row].length; col++) {

            let element = a[row][col];
            if (row < a.length - 1) {
                if (element == a[row + 1][col]) {
                    count++;
                }
            }
            if (col < a[row].length - 1) {
                if (element == a[row][col + 1]) {
                    count++;
                }
            }
        }
    }
    return (count);
}


solve([
    ['test', 'yes', 'yo', 'ho'],
    ['well', 'done', 'yo', '6'],
    ['not', 'done', 'yet', '5']
]);