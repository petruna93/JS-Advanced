function solve(a) {
    let count = 1;
    a.sort((a, b) => a.localeCompare(b));
    for (let i = 0; i < a.length; i++) {
        let name = a[i];
        console.log(`${count}.${name}`);
        count++;
    }
}
solve(["John", "Bob", "Christina", "Ema"]);