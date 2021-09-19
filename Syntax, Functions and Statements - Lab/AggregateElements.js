function aggregateElement(a) {
    let sum = Number(0);
    let secondSum = Number(0);
    let thirdSum = '';
    for (let i = 0; i < a.length; i++) {
        sum += Number(a[i]);
        secondSum += 1 / Number(a[i]);
        thirdSum += a[i];
    }
    console.log(sum);
    console.log(secondSum.toFixed(4));
    console.log(thirdSum);





}


aggregateElement([1, 2, 3]);
aggregateElement([2, 4, 8, 16]);