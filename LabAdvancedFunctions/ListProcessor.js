function solve(arr) {
    let result = [];
    for (let index = 0; index < arr.length; index++) {
        let [commmand, text] = arr[index].split(' ');
        if (commmand == 'add') {
            result.push(text);
        } else if (commmand == 'remove') {
            for (let i = 0; i < result.length; i++) {
                let element = result[i];
                if (element == text) {
                    let index = result.indexOf(element);
                    result.splice(index, index + 1);
                }
            }
        } else if (commmand == 'print') {
            console.log(result.join());

        }
    }
}

solve(['add hello', 'add again', 'add again', 'remove again', 'print']);
solve(['add pesho', 'add george', 'add peter', 'remove peter', 'print']);
3