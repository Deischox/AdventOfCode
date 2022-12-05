var fs = require('fs');
var data = fs.readFileSync('Day4/input.txt', 'utf8').split("\n");

var Solution1 = () => {
    var count = 0
    for (var i = 0; i < data.length; i++) {
        var d = data[i].split(',')
        var first = d[0].split('-')
        var second = d[1].split('-')

        if (parseInt(first[0]) >= parseInt(second[0]) && parseInt(first[1]) <= parseInt(second[1])) {
            count += 1
        }
        else if (parseInt(second[0]) >= parseInt(first[0]) && parseInt(second[1]) <= parseInt(first[1])) {
            count += 1
        }
    }
    return count
}

var Solution2 = () => {
    var count = 0
    for (var i = 0; i < data.length; i++) {
        var d = data[i].split(',')
        var first = d[0].split('-')
        var second = d[1].split('-')
        if (!(parseInt(first[1]) < parseInt(second[0]) || parseInt(first[0]) > parseInt(second[1]))) {
            count += 1
        }
    }
    return count
}


console.log(Solution2())