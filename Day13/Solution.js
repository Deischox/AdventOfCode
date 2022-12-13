var fs = require('fs');
var data = fs.readFileSync('Day13/input.txt', 'utf8').split("\n");



var compare = (a, b) => {
    var l = Math.max(a.length, b.length)
    for (var i = 0; i < l; i++) {
        const itemA = a[i]
        const itemB = b[i]
        if (itemA === undefined) return true
        if (itemB === undefined) return false
        if (Number.isInteger(itemA) && Number.isInteger(itemB)) {
            if (itemA > itemB) return false
            if (itemA < itemB) return true
            continue
        }
        if (!Array.isArray(itemA)) {
            return compare([itemA], itemB)
        }
        if (!Array.isArray(itemB)) {
            return compare(itemA, [itemB])
        }
        const or = compare(itemA, itemB)
        if (or !== undefined) return or
    }
}

var Solution1 = () => {
    var items = []
    var list = []
    for (var i = 0; i < data.length; i++) {
        if ((i + 1) % 3 === 0) {
            var a = items.shift()
            var b = items.shift()
            console.log(a, b, compare(a, b))
            if (compare(a, b)) list.push(((i + 1) / 3))
        } else {
            items.push(JSON.parse(data[i]))
        }
    }
    console.log(list)
    return list.reduce((a, b) => a + b, 0)
}

var Solution2 = () => {
    data = data.filter((a) => a !== "").map(a => JSON.parse(a))
    data.sort((a, b) => compare(a, b) ? -1 : 1)

    var two = 0
    var six = 0
    for (var j = 0; j < data.length; j++) {
        if (data[j].length === 1 && data[j][0].length === 1 && data[j][0][0] === 2) two = j
        if (data[j].length === 1 && data[j][0].length === 1 && data[j][0][0] === 6) six = j
    }
    console.log(two, six, data[two], data[six])
    return (two + 1) * (six + 1)
}

console.log(Solution2())




