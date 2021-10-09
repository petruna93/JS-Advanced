function extractText() {
    let elements = document.querySelectorAll('#items li');
    let result = "";
    for (let element of elements) {
        result += element.textContent.trim() + "\n";
    }
    let resultElement = document.getElementById('result');
    resultElement.textContent = result;
}