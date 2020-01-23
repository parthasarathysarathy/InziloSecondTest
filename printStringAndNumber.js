function printStringAndInt(input1, input2) {
    var out = "";
    var value = (input1.length < input2.length) ? input2 : input1
    var value1 = (input1.length < input2.length) ? input1 : input2
    for (let i = 0; i < value.length; i++) {
        if (value1[i]) {
            out += value1[i] + value[i]
        } else {
            out += value[i]
        }
    }
    return out;
}

printStringAndInt("johndoe", "08061972")