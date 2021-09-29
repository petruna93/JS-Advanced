function solve(a) {
    a.sort(function(a, b) {
        if (a.length == b.length) {
            return a.localeCompare(b);
        } else {
            return a.length - b.length;
        }
    })
    console.log(a.join("\n"));
}

solve(['alpha',
    'beta',
    'gamma'
]);
solve(['Isacc',
    'Theodor',
    'Jack',
    'Harrison',
    'George'
]);
solve(['test',
    'Deny',
    'omen',
    'Default'
]);