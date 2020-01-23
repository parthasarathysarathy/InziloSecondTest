function countLetters(str) {
    str = str.split("")
    let obj = {}
    for (let i in str) {
        obj[str[i]] = obj[str[i]] ? obj[str[i]] + 1 : 1
    }
    let key = Object.keys(obj).sort();
    key.map(ele => {
        var out = ele + " - " + obj[ele];
        return out;
    })
}

countLetters("banana")