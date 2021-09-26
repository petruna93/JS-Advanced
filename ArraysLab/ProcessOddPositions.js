function solve(a) {
    let array = [];

    for (let i = 1; i < a.length; i += 2) {
        let num = Number(a[i]);
        array.push(num * 2);
    }
    array.reverse();

    return (array);
}

solve([10, 15, 20, 25]);
solve([3, 0, 10, 4, 7, 3]);