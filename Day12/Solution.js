var fs = require('fs');
var data = fs.readFileSync('Day12/input.txt', 'utf8').split("\n").map(i => i.split(""));

var check = (x, y) => {
    var alphabet = "abcdefghijklmnopqrstuvwxyz"
    if (y === "E") y = "z"
    if (x === "S") x = "a"
    if (y < x) return true
    if (!alphabet.includes(y)) return false
    if (alphabet.indexOf(y) <= alphabet.indexOf(x) + 1) return true
}

var Solution1 = () => {
    for (var i = 0; i < data.length; i++) {
        if (data[i].indexOf("S") >= 0) {
            start = [i, data[i].indexOf("S"), 0]
            break;
        }
    }
    var stack = []
    stack.push(start)
    while (stack.length > 0) {
        var root = stack.shift()
        if (data[root[0]][root[1]] !== "X") {
            if (data[root[0]][root[1]] === "E") return root[2]
            if (root[0] > 0 && check(data[root[0]][root[1]], data[root[0] - 1][root[1]])) stack.push([root[0] - 1, root[1], root[2] + 1])
            if (root[1] > 0 && check(data[root[0]][root[1]], data[root[0]][root[1] - 1])) stack.push([root[0], root[1] - 1, root[2] + 1])
            if (root[0] < data.length - 1 && check(data[root[0]][root[1]], data[root[0] + 1][root[1]])) stack.push([root[0] + 1, root[1], root[2] + 1])
            if (root[1] < data[0].length - 1 && check(data[root[0]][root[1]], data[root[0]][root[1] + 1])) stack.push([root[0], root[1] + 1, root[2] + 1])

            data[root[0]][root[1]] = "X"
        }

    }
}

var Solution2 = () => {
    for (var i = 0; i < data.length; i++) {
        if (data[i].indexOf("E") >= 0) {
            start = [i, data[i].indexOf("E"), 0]
            break;
        }
    }
    var stack = []
    stack.push(start)
    while (stack.length > 0) {
        var root = stack.shift()
        if (data[root[0]][root[1]] !== "X") {
            if (data[root[0]][root[1]] === "a") return root[2]
            if (root[0] > 0 && check(data[root[0] - 1][root[1]], data[root[0]][root[1]])) stack.push([root[0] - 1, root[1], root[2] + 1])
            if (root[1] > 0 && check(data[root[0]][root[1] - 1], data[root[0]][root[1]])) stack.push([root[0], root[1] - 1, root[2] + 1])
            if (root[0] < data.length - 1 && check(data[root[0] + 1][root[1]], data[root[0]][root[1]])) stack.push([root[0] + 1, root[1], root[2] + 1])
            if (root[1] < data[0].length - 1 && check(data[root[0]][root[1] + 1], data[root[0]][root[1]])) stack.push([root[0], root[1] + 1, root[2] + 1])

            data[root[0]][root[1]] = "X"
        }
    }
}