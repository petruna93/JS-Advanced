function cookingByNumbers(arg1, arg2, arg3, arg4, arg5, arg6) {
    let num = Number(arg1);
    let firstOperation = arg2;
    let secondOperation = arg3;
    let thirdOperation = arg4;
    let fourthOperation = arg5;
    let fifthOperation = arg6;

    num = operations(firstOperation, num);
    num = operations(secondOperation, num);
    num = operations(thirdOperation, num);
    num = operations(fourthOperation, num);
    num = operations(fifthOperation, num);


    function operations(command, num) {
        switch (command) {
            case "chop":
                num = num / 2;
                break;
            case "dice":
                num = Math.sqrt(num);
                break;
            case "spice":
                num = num + 1;
                break;
            case "bake":
                num = num * 3;
                break;
            case "fillet":
                num = num * 0.8;
                break;
        }
        console.log(num);
        return num;
    }




}
cookingByNumbers('32', 'chop', 'chop', 'chop', 'chop', 'chop');

cookingByNumbers('9', 'dice', 'spice', 'chop', 'bake', 'fillet');