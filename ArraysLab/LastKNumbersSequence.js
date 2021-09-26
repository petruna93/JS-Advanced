function solve(a, b) {
    let numOne = Number(a);
    let numTwo = Number(b);
    let array = [1];

    for (let i = 1; i < numOne; i++) {
        let numExtra = 0;
        let startIndex = Math.max(0, i - numTwo);

        for (let s = startIndex; s < i; s++) {
            numExtra += array[s];
        }
        array.push(numExtra);
    }
    console.log(array.join());
    return array;
}
solve(6, 3);
solve(8, 2);