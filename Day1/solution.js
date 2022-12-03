var fs = require('fs');
var data = fs.readFileSync('Day1/input.txt', 'utf8').split("\n");

var Solution1 = () => {
    var max = 0
    var current = 0
    for (var i = 0; i < data.length; i++) {
        if (data[i] !== "") {
            current += parseInt(data[i])
        }
        else if (current > max) {
            max = current
            current = 0
        } else {
            current = 0
        }
    }
    return max
}

var Solution2 = () => {
    var max = []
    var current = 0
    for (var i = 0; i < data.length; i++) {
        if (data[i] !== "") {
            current += parseInt(data[i])
        }
        else {
            max.push(current)
            current = 0
        }
    }
    max.sort((a, b) => b - a)
    return max.slice(0, 3).reduce((a, b) => a + b, 0)
}
console.log(Solution2())
