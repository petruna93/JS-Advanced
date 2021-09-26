function solve(a) {
    let array = [];
    a.sort(function(a, b) {
        return a - b;
    })
    for (let i = Math.floor(a.length / 2); i < a.length; i++) {
        let num = Number(a[i]);
        array.push(num);
    }
    return (array);
}

solve([4, 7, 2, 5]);
solve([3, 19, 14, 7, 2, 19, 6]);