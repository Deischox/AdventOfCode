var fs = require('fs');
var data = fs.readFileSync('Day8/input.txt', 'utf8').split("\n");

var Solution1 = () => {
    var visible = []
    //Left to Right
    for (var i = 0; i < data.length; i++) {
        var biggest = -1
        for (var j = 0; j < data[i].length; j++) {
            if (data[i][j] > biggest) {
                if (!visible.includes(i + ":" + j)) {
                    visible.push(i + ":" + j)
                }
                biggest = data[i][j]
            }
        }
    }
    //Right to Left
    for (var i = 0; i < data.length; i++) {
        var biggest = -1
        for (var j = data[i].length - 1; j >= 0; j--) {
            if (data[i][j] > biggest) {
                if (!visible.includes(i + ":" + j)) {
                    visible.push(i + ":" + j)
                }
                biggest = data[i][j]
            }
        }
    }
    //Down to Up
    for (var i = 0; i < data[0].length; i++) {
        var biggest = -1
        for (var j = data.length - 1; j >= 0; j--) {
            if (data[j][i] > biggest) {
                if (!visible.includes(j + ":" + i)) {
                    visible.push(j + ":" + i)
                }
                biggest = data[j][i]
            }
        }
    }

    //Up to Down
    for (var i = 0; i < data[0].length; i++) {
        var biggest = -1
        for (var j = 0; j < data.length; j++) {
            if (data[j][i] > biggest) {
                if (!visible.includes(j + ":" + i)) {
                    visible.push(j + ":" + i)
                }
                biggest = data[j][i]
            }
        }
    }
    return visible.length
}

var Solution2 = () => {
    var overallRange = []
    for (var i = 1; i < data.length - 1; i++) {
        for (var j = 1; j < data[0].length - 1; j++) {
            var overall = 1
            // Check Up
            var sight = 1
            for (var x = i - 1; x > 0; x--) {
                if (data[x][j] < data[i][j]) sight += 1
                else break
            }
            overall *= sight

            // Check Down
            sight = 1
            for (var x = i + 1; x < data.length - 1; x++) {
                if (data[x][j] < data[i][j]) sight += 1
                else break
            }
            overall *= sight

            // Check Right
            sight = 1
            for (var x = j + 1; x < data[0].length - 1; x++) {
                if (data[i][x] < data[i][j]) sight += 1
                else break
            }
            overall *= sight

            // Check Left
            sight = 1
            for (var x = j - 1; x > 0; x--) {
                if (data[i][x] < data[i][j]) sight += 1
                else break
            }
            overall *= sight
            overallRange.push(overall)
        }
    }
    return Math.max(...overallRange)
}