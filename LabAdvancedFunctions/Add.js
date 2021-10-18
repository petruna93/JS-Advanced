function solution(a) {
    return (num) => num + a;
}

let add = solution(5);
console.log(add(2));
console.log(add(3));