function solve(a) {

    a.sort(function(a, b) {
        return a - b;
    });
    console.log(a[0] + " " + a[1]);


}
solve([30, 15, 50, 5]);
solve([3, 0, 10, 4, 7, 3]);