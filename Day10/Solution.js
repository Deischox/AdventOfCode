var fs = require('fs');
var data = fs.readFileSync('Day10/input.txt', 'utf8').split("\n");

var Solution1 = () => {
    var value = 0
    var cycle = 0
    var X = 1
    for (var i = 0; i < data.length; i++) {
        var s = data[i].split(" ")
        if (s[0] === "noop") {
            cycle += 1
            if ((cycle + 20) % 40 === 0) {
                value += cycle * X
            }
        }
        else {
            cycle += 1
            if ((cycle + 20) % 40 === 0) {
                value += cycle * X
            }
            cycle += 1
            if ((cycle + 20) % 40 === 0) {
                value += cycle * X
            }
            X += parseInt(s[1])
        }
    }
    return value
}

var cycleRun = (cycle, terminalLine, X) => {
    if ((cycle % 40) === X || (cycle % 40) === X + 1 || (cycle % 40) === X + 2) {
        terminalLine += "█"
    } else {
        terminalLine += " "
    }
    if (cycle % 40 === 0) {
        console.log(terminalLine)
        terminalLine = ""
    }
    return terminalLine
}

var Solution2 = () => {
    var value = 0
    var cycle = 0
    var X = 1
    var terminalLine = ""
    for (var i = 0; i < data.length; i++) {
        var s = data[i].split(" ")
        if (s[0] === "noop") {
            cycle += 1
            terminalLine = cycleRun(cycle, terminalLine, X)
        }
        else {
            cycle += 1
            terminalLine = cycleRun(cycle, terminalLine, X)
            cycle += 1
            terminalLine = cycleRun(cycle, terminalLine, X)
            X += parseInt(s[1])
        }
    }
}

Solution2()