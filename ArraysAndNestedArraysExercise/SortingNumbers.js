function solve(a) {
    let result = [];
    a.sort(function(a, b) {
        return a - b;
    })
    while (a.length > 0) {
        let firstNum = a.shift();
        let secondNum = a.pop();
        result.push(firstNum);
        result.push(secondNum);
    }
    return result;

}

solve([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);