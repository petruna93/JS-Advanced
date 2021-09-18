function mathOperations(a, b, c) {
    let result;
    if (c === '+') {
        result = a + b;
    } else if (c === '-') {
        result = a - b;
    } else if (c === '*') {
        result = a * b;
    } else if (c === '/') {
        result = a / b;
    } else if (c === '%') {
        result = a % b;
    } else if (c === '**') {
        result = a ** b;
    }
    console.log(result);
}
mathOperations(5, 6, '+');
mathOperations(3, 5.5, '*');