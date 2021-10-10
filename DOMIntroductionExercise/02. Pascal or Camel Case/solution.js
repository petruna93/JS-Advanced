function solve() {
    let input = document.getElementById("text").value;
    let currentCase = document.getElementById("naming-convention").value;
    let resultContainer = document.getElementById("result");
    let splitted = input.split(" ");

    let resultString = "";

    if (currentCase == "Pascal Case") {
        for (let i = 0; i < splitted.length; i++) {
            resultString += splitted[i][0].toUpperCase() +
                splitted[i].slice(1, splitted[i].length).toLowerCase();
        }
        resultContainer.textContent = resultString;
    } else if (currentCase == "Camel Case") {
        resultString += splitted[0][0].toLowerCase() +
            splitted[0].slice(1, splitted[0].length).toLowerCase();
        for (let i = 1; i < splitted.length; i++) {
            resultString += splitted[i][0].toUpperCase() +
                splitted[i].slice(1, splitted[i].length).toLowerCase();
        }
        resultContainer.textContent = resultString;
    } else {
        resultContainer.textContent = "Error!";
    }
}