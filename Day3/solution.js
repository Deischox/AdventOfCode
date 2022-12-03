var fs = require('fs');
var data = fs.readFileSync('Day3/input.txt', 'utf8').split("\n");

var Solution1 = () => {
    var counter = 0
    var alphabet = " abcdefghijklmnopqrstuvwxyz"
    for (var i = 0; i < data.length; i++) {
        var front = data[i].slice(0, data[i].length / 2)
        var back = data[i].slice(data[i].length / 2, data[i].length)
        var same = []
        for (var j = 0; j < front.length; j++) {
            if (back.indexOf(front[j]) >= 0 && !same.includes(front[j])) {
                same.push(front[j])
                if (front[j] === front[j].toLowerCase()) {
                    counter += alphabet.indexOf(front[j].toLowerCase())
                } else {
                    counter += alphabet.indexOf(front[j].toLowerCase()) + 26
                }

            }
        }
    }
    return counter
}

var Solution2 = () => {
    var counter = 0
    var alphabet = " abcdefghijklmnopqrstuvwxyz"
    var same = []
    var currentGroup = []
    for (var i = 0; i < data.length; i++) {

        if (currentGroup.length === 0) {
            currentGroup.push(data[i])
        } else if (currentGroup.length === 1) {
            currentGroup.push(data[i])
            for (var j = 0; j < data[i].length; j++) {
                if (currentGroup[0].indexOf(data[i][j]) >= 0 && !same.includes(data[i][j])) {
                    same.push(data[i][j])
                }
            }
        } else if (currentGroup.length === 2) {
            currentGroup.push(data[i])
            for (var j = 0; j < same.length; j++) {
                if (data[i].indexOf(same[j]) >= 0) {
                    if (same[j] === same[j].toLowerCase()) {
                        counter += alphabet.indexOf(same[j].toLowerCase())
                    } else {
                        counter += alphabet.indexOf(same[j].toLowerCase()) + 26
                    }
                    break;
                }
            }
        } else {
            currentGroup = []
            same = []
            currentGroup.push(data[i])
        }
    }
    return counter
}


console.log(Solution2())
