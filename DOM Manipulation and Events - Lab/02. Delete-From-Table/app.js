function deleteByEmail() {
    let email = document.querySelector('input[name="email"]').value;
    let rows = Array.from(document.querySelectorAll('tbody tr'));
    let f = true;
    for (let row of rows) {
        let emaili = row.children[1].textContent;
        if (emaili == email) {
            row.parentNode.removeChild(row);
            f = false;
            document.getElementById('result').textContent = "Deleted.";
        }

    }
    if (f == true) {
        document.getElementById('result').textContent = "Not found.";

    }

}