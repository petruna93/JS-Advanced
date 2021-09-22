function roadRadar(arg1, arg2) {
    let speed = Number(arg1);
    let typeRoad = arg2;
    let different = 0;
    let speedLimit = 0;
    let status = "";

    switch (typeRoad) {
        case "motorway":
            if (speed <= 130) {
                console.log(`Driving ${speed} km/h in a 130 zone`)
                return;
            } else {
                different = speed - 130;
            }
            speedLimit = 130;
            break;
        case "interstate":
            if (speed <= 90) {
                console.log(`Driving ${speed} km/h in a 90 zone`)
                return;
            } else {
                different = speed - 90;
            }
            speedLimit = 90;
            break;
        case "city":
            if (speed <= 50) {
                console.log(`Driving ${speed} km/h in a 50 zone`)
                return;
            } else {
                different = speed - 50;
            }
            speedLimit = 50;
            break;
        case "residential":
            if (speed <= 20) {
                console.log(`Driving ${speed} km/h in a 20 zone`)
                return;
            } else {
                different = speed - 20;
            }
            speedLimit = 20;
            break;
    }
    if (different <= 20) {
        status = 'speeding';
    } else if (different <= 40) {
        status = 'excessive speeding';
    } else {
        status = 'reckless driving';
    }

    console.log(`The speed is ${different} km/h faster than the allowed speed of ${speedLimit} - ${status}`)


}
roadRadar(40, 'city');
roadRadar(21, 'residential');
roadRadar(120, 'interstate');
roadRadar(200, 'motorway');