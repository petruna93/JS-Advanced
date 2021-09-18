function squareOfStars(a = 5) {
    for (let red = 0; red < a; red++) {
        let sbor = "";
        for (let colona = 0; colona < a; colona++) {
            sbor = sbor + "*" + ' ';
        }
        console.log(sbor);
    }
}
squareOfStars(1);
squareOfStars(2);
squareOfStars(5);
squareOfStars('');