var fs = require('fs');
var data = fs.readFileSync('Day6/input.txt', 'utf8').split("");

var Solution1 = () => {
    var stack = []
    for (var i = 0; i < data.length; i++) {
        if (stack.length >= 4) {
            stack.shift()
        }
        stack.push(data[i])
        var s = []
        var found = true
        if (stack.length >= 4) {
            for (var j = 0; j < stack.length; j++) {
                if (s.includes(stack[j])) found = false;
                else s.push(stack[j])
            }
            if (found) return i + 1;
        }
    }
}

var Solution2 = () => {
    var stack = []
    for (var i = 0; i < data.length; i++) {
        if (stack.length >= 14) {
            stack.shift()
        }
        stack.push(data[i])
        var s = []
        var found = true
        if (stack.length >= 14) {
            for (var j = 0; j < stack.length; j++) {
                if (s.includes(stack[j])) found = false;
                else s.push(stack[j])
            }
            if (found) return i + 1;
        }
    }
}