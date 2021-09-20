function sameNumbers(input) {
    let inputString = input.toString();
    let sum = parseInt(inputString[0]);
    let isTrue = true;

    for (let i = 1; i < inputString.length; i++) {
        let num = parseInt(inputString[i]);
        sum += num;
        if (inputString[i] != inputString[i - 1]) {
            isTrue = false;
        }
    }
    console.log(isTrue);
    console.log(sum);
}

sameNumbers(2222222);
sameNumbers(1234);