function wordsUppercase(text) {

    let result = text.toUpperCase()
        .split(/[\W]+/)
        .filter(w => w.length > 0)
        .join(", ");

    console.log(result);


}
wordsUppercase('Hi, how are you?');
wordsUppercase('hello');