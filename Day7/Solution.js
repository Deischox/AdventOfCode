const { count } = require('console');
var fs = require('fs');
var data = fs.readFileSync('Day7/input.txt', 'utf8').split("\n");


class File {
    constructor(name, size) {
        this.name = name
        this.size = size
        if (name === dir) {
            this.name = size
            this.size = 0
        }
    }
}


var Solution1 = () => {
    var dict = {}
    var current = "/"
    for (var i = 0; i < data.length; i++) {
        if (data[i][0] === "$") {
            if (data[i].includes("cd")) {
                if (data[i].split(" ")[2] === "/") {
                    current = "/"
                } else if (data[i].split(" ")[2] === "..") {
                    var c = current.split("/")
                    c.pop()
                    current = c.join("/")
                    if (current.length === 0) current = "/"
                } else {
                    current += (current.length > 1 ? "/" : "") + data[i].split(" ")[2]
                }
            }
        } else {
            if (current in dict) {
                dict[current].push(data[i])
            }
            else {
                dict[current] = [data[i]]
            }
        }
    }
    var overall = 0
    var searchDict = (e) => {
        var count = 0
        for (var i = 0; i < dict[e].length; i++) {
            if (dict[e][i].split(" ")[0] === "dir") {
                count += searchDict(e + (e.length > 1 ? "/" : "") + dict[e][i].split(" ")[1])
            } else {
                count += parseInt(dict[e][i].split(" ")[0])
            }
        }
        if (count < 100000) overall += count
        return count
    }

    searchDict("/")
    return overall
}

var Solution2 = () => {
    var dict = {}
    var current = "/"
    for (var i = 0; i < data.length; i++) {
        if (data[i][0] === "$") {
            if (data[i].includes("cd")) {
                if (data[i].split(" ")[2] === "/") {
                    current = "/"
                } else if (data[i].split(" ")[2] === "..") {
                    var c = current.split("/")
                    c.pop()
                    current = c.join("/")
                    if (current.length === 0) current = "/"
                } else {
                    current += (current.length > 1 ? "/" : "") + data[i].split(" ")[2]
                }
            }
        } else {
            if (current in dict) {
                dict[current].push(data[i])
            }
            else {
                dict[current] = [data[i]]
            }
        }
    }
    var overall = 70000000 - 44359867
    var smallest = 2 ** 31
    var searchDict = (e) => {
        var count = 0
        for (var i = 0; i < dict[e].length; i++) {
            if (dict[e][i].split(" ")[0] === "dir") {
                count += searchDict(e + (e.length > 1 ? "/" : "") + dict[e][i].split(" ")[1])
            } else {
                count += parseInt(dict[e][i].split(" ")[0])
            }
        }
        if (overall + count >= 30000000 && count < smallest) {
            smallest = count

        }
        return count
    }
    searchDict("/")
    return smallest
}

console.log(Solution1())
console.log(Solution2())