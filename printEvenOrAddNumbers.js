function printEvenOrOdd(input) {
    var out = "";
    input = input.split("-");
    input[0] = parseInt(input[0])
    for (let i = 1; i <= input[0]; i++) {
        var condition = (input[1] == 'e') ? (i % 2 == 0) : (i % 2 != 0)
        if (condition) {
            out += i + "|"
        }
    }
    var newout = out.substring(0, out.length - 1);
    return newout;
}

printEvenOrOdd("8-e")