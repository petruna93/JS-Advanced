function previousDay(year, month, day) {
    let date = new Date(year, month - 1, day);
    let resultDate = new Date();
    let millisecs = 1000 * 60 * 60 * 24;
    resultDate.setTime(date.getTime() - millisecs);


    console.log(resultDate.getFullYear() + '-' + (Number(resultDate.getMonth()) + 1) + '-' + resultDate.getDate());
}

previousDay(2016, 9, 30);
previousDay(2016, 10, 1);