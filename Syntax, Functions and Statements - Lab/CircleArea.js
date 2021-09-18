function circleArea(a) {

    if (typeof a === 'number') {
        let area = Math.PI * a ** 2;
        console.log(area.toFixed(2));
    } else {
        let type = typeof a;
        console.log(`We can not calculate the circle area, because we receive a ${type}.`)

    }

}

circleArea(5);
circleArea('name');