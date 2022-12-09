var fs = require('fs');
var data = fs.readFileSync('Day9/input.txt', 'utf8').split("\n");


var printMaze = (play, H, T) => {
    for (var i = 0; i < play.length; i++) {
        var line = "" + i
        for (var j = 0; j < play[0].length; j++) {
            if (H[0] === i && H[1] === j) line += " H "
            else if (T[0] === i && T[1] === j) line += " T "
            else line += " . "
        }
        console.log(line)
    }
    console.log("")
}

var printMaze2 = (play, H, T) => {
    for (var i = 0; i < play.length; i++) {
        var line = "" + i
        for (var j = 0; j < play[0].length; j++) {

            var current = " . "
            for (var t = 1; t < T.length; t++) {
                if (T[t][0] === i && T[t][1] === j) current = " " + t + " "
            }
            if (H[0] === i && H[1] === j) current = " H "
            line += current

        }
        console.log(line)
    }
    console.log("")
}


var calculateT = (H, T, seen) => {

    if (Math.abs(H[0] - T[0]) === 2 || Math.abs(H[1] - T[1]) === 2) {
        if (H[0] === T[0]) {
            if (H[1] > T[1]) T[1] += 1
            else T[1] -= 1
        } else if (H[1] === T[1]) {
            if (H[0] > T[0]) T[0] += 1
            else T[0] -= 1
        } else {
            if (H[0] < T[0]) {
                if (H[1] > T[1]) {
                    T[0] -= 1
                    T[1] += 1
                } else {
                    T[0] -= 1
                    T[1] -= 1
                }
            } else {
                if (H[1] > T[1]) {
                    T[0] += 1
                    T[1] += 1
                } else {
                    T[0] += 1
                    T[1] -= 1
                }
            }
        }
        if (!seen.includes(T[0] + ":" + T[1])) seen.push(T[0] + ":" + T[1])

    }
}

var Solution1 = () => {
    var play = Array.from(Array(1000), () => new Array(1000))
    var H = [500, 500]
    var T = [500, 500]
    var seen = []
    for (var i = 0; i < data.length; i++) {
        var d = data[i].split(" ")
        var dir = d[0]
        var moves = d[1]
        for (var j = 0; j < moves; j++) {
            switch (dir) {
                case "R":
                    H[1] += 1
                    break;
                case "L":
                    H[1] -= 1
                    break;
                case "U":
                    H[0] -= 1
                    break;
                case "D":
                    H[0] += 1
                    break;
                default:
                    break;
            }
            calculateT(H, T, seen)
        }
    }
    return seen.length + 1
}


var Solution2 = () => {
    var play = Array.from(Array(500), () => new Array(500))
    var T = [[play.length / 2, play[0].length / 2], [play.length / 2, play[0].length / 2], [play.length / 2, play[0].length / 2], [play.length / 2, play[0].length / 2], [play.length / 2, play[0].length / 2], [play.length / 2, play[0].length / 2], [play.length / 2, play[0].length / 2], [play.length / 2, play[0].length / 2], [play.length / 2, play[0].length / 2], [play.length / 2, play[0].length / 2]]
    var seen = []
    for (var i = 0; i < data.length; i++) {
        var d = data[i].split(" ")
        var dir = d[0]
        var moves = d[1]

        for (var j = 0; j < moves; j++) {
            switch (dir) {
                case "R":
                    T[0][1] += 1
                    break;
                case "L":
                    T[0][1] -= 1
                    break;
                case "U":
                    T[0][0] -= 1
                    break;
                case "D":
                    T[0][0] += 1
                    break;
                default:
                    break;
            }
            for (var t = 1; t < T.length; t++) {
                if (t === T.length - 1) calculateT(T[t - 1], T[t], seen)
                else calculateT(T[t - 1], T[t], [])
            }
        }
    }
    return seen.length + 1
}