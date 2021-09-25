function solve(a) {
    let empty = [];

    for (let i = 0; i < a.length; i += 2) {
        let element = a[i];
        empty.push(element);
    }
    console.log(empty.join(" "));
}

solve(['20', '30', '40', '50', '60']);
solve(['5', '10']);