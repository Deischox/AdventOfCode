var fs = require('fs');
var data = fs.readFileSync('Day2/input.txt', 'utf8').split('\n');


/**
 * A, X = Rock
 * B, Y = Paper 
 * C, Z = Scissor
 */
var Solution1 = () => {
    var count = 0;
    for (var i = 0; i < data.length; i++) {
        var currentData = data[i].split(' ')
        var other = currentData[0]
        var me = currentData[1]

        if (other === "A") {
            if (me === "X") {
                count += 1 + 3
            } else if (me === "Y") {
                count += 2 + 6
            } else if (me === "Z") {
                count += 3 + 0
            }
        } else if (other === "B") {
            if (me === "X") {
                count += 1 + 0
            } else if (me === "Y") {
                count += 2 + 3
            } else if (me === "Z") {
                count += 3 + 6
            }
        } else if (other === "C") {
            if (me === "X") {
                count += 1 + 6
            } else if (me === "Y") {
                count += 2 + 0
            } else if (me === "Z") {
                count += 3 + 3
            }
        }
    }
    return count
}

/**
 * A = Rock 1 Point
 * B = Paper 2 Points
 * C = Scissor 3 Points
 * 
 * X = loose 0 Points
 * Y = draw 3 Points
 * Z = win 6 Points
 */
var Solution2 = () => {
    var count = 0;
    for (var i = 0; i < data.length; i++) {
        var currentData = data[i].split(' ')
        var other = currentData[0]
        var me = currentData[1]

        if (other === "A") {
            if (me === "X") {
                count += 0 + 3
            } else if (me === "Y") {
                count += 3 + 1
            } else if (me === "Z") {
                count += 6 + 2
            }
        } else if (other === "B") {
            if (me === "X") {
                count += 0 + 1
            } else if (me === "Y") {
                count += 3 + 2
            } else if (me === "Z") {
                count += 6 + 3
            }
        } else if (other === "C") {
            if (me === "X") {
                count += 0 + 2
            } else if (me === "Y") {
                count += 3 + 3
            } else if (me === "Z") {
                count += 6 + 1
            }
        }
    }
    return count
}

console.log(Solution2())

