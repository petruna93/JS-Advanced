function solve(a) {
    let result = [];
    let count = 1;
    for (let i = 0; i < a.length; i++) {
        let command = a[i];


        if (command === 'add') {
            result.push(count);
        } else if (command == 'remove' && result.length > 0) {
            result.pop(count);
        }
        count++;

    }
    if (result.length == 0) {
        console.log("Empty");
    } else {
        console.log(result.join('\n'));
    }
}

solve(['add',
    'add',
    'add',
    'add'
]);
solve(['add',
    'add',
    'remove',
    'add',
    'add'
]);
solve(['remove',
    'remove',
    'remove'
]);