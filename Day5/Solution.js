var fs = require('fs');
var data = fs.readFileSync('Day5/input.txt', 'utf8').split("\n");

var Solution1 = () => {
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var stacks = [...Array((data[0].length + 1) / 4)].map(() => []);
    // Create Stacks
    var begin = 0
    for (var i = 0; i < data.length; i++) {

        if (data[i].includes('1')) {
            begin = i + 1
            break;
        }
        var e = data[i].split("")
        for (var j = 0; j < e.length; j++) {
            if (alphabet.includes(e[j])) {
                stacks[(j - 1) / 4].push(e[j])
            }
        }
    }

    for (var i = begin + 1; i < data.length; i++) {
        var commands = data[i].split(" ")
        console.log(commands)
        for (var j = 0; j < parseInt(commands[1]); j++) {
            var element = stacks[parseInt(commands[3]) - 1].shift()
            stacks[parseInt(commands[5]) - 1].unshift(element)
        }
    }

    var s = ""
    for (var i = 0; i < stacks.length; i++) {
        s += stacks[i].shift()
    }
    return s
}

var Solution2 = () => {
    var alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    var stacks = [...Array((data[0].length + 1) / 4)].map(() => []);
    // Create Stacks
    var begin = 0
    for (var i = 0; i < data.length; i++) {

        if (data[i].includes('1')) {
            begin = i + 1
            break;
        }
        var e = data[i].split("")
        for (var j = 0; j < e.length; j++) {
            if (alphabet.includes(e[j])) {
                stacks[(j - 1) / 4].push(e[j])
            }
        }
    }

    for (var i = begin + 1; i < data.length; i++) {
        var commands = data[i].split(" ")
        var e = stacks[parseInt(commands[3]) - 1].splice(0, parseInt(commands[1]))
        stacks[parseInt(commands[5]) - 1] = e.concat(stacks[parseInt(commands[5]) - 1])
    }

    var s = ""
    for (var i = 0; i < stacks.length; i++) {
        s += stacks[i].shift()
    }
    return s
}