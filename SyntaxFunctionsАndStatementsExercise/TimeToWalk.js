function timeToWalk(arg1, arg2, arg3) {
    let stepNumber = Number(arg1);
    let stepsMeter = Number(arg2);
    let studentSpeed = Number(arg3);

    let distance = stepNumber * stepsMeter;
    let speedMeterSec = studentSpeed / 3.6;
    let time = distance / speedMeterSec;
    let rest = Math.floor(distance / 500);

    let timeMin = Math.floor(time / 60);
    let timeSec = Math.round(time - (timeMin * 60));
    let timeHours = Math.floor(time / 3600);

    console.log((timeHours < 10 ? "0" : "") + timeHours +
        ":" + (timeMin + rest < 10 ? "0" : "") + (timeMin + rest) +
        ":" + (timeSec < 10 ? "0" : "") + timeSec);

}

timeToWalk(4000, 0.60, 5);
timeToWalk(2564, 0.70, 5.5);