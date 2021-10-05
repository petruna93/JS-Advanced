function solve(x, y, color) {

    let newColor = color.toString();
    newColor = newColor[0].toUpperCase() + newColor.substring(1);

    let rect = {
        'width': x,
        'height': y,
        'color': newColor,
        'calcArea': function() {
            return x * y;
        }
    }
    return rect;
}
solve(let rect = rectangle(4, 5, 'red'); console.log(rect.width); console.log(rect.height); console.log(rect.color); console.log(rect.calcArea()););