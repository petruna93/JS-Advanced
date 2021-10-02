function cityRecord(name, population, treasury) {
    let city = {
        name,
        population,
        treasury,
        taxRate: 10,
        collectTaxes() {
            this.treasury += Math.floor(this.population * this.taxRate);
        },
        applyGrowth(percentage) {
            this.population += Math.floor(this.population * (percentage / 100));
        },
        applyRecession(percentage) {
            this.treasury -= Math.floor(this.treasury * (percentage / 100));
        }
    };
    return city;
}
const city =
    cityRecord('Tortuga', 7000, 15000);
console.log(city);
city.collectTaxes();
console.log(city.population);
city.applyGrowth(5);
console.log(city.population);