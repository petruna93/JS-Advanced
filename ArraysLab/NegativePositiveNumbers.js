function solve(a) {
    let array = [];

    for (let i = 0; i < a.length; i++) {
        let num = Number(a[i]);
        if (num >= 0) {
            array.push(num);
        } else {
            array.unshift(num);
        }
    }
    console.log(array.join("\n"));
    console.log(".....");
}
solve([7, -2, 8, 9]);
solve([3, -2, 0, -1]);