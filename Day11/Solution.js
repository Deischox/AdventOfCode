var fs = require('fs');
var data = fs.readFileSync('Day11/input.txt', 'utf8').split("\n");

class Monkey {
    constructor(name, items, operationSymbol, operationCount, test, iftrue, iffalse, ev) {
        this.name = name;
        this.items = items;
        this.operationSymbol = operationSymbol;
        this.operationCount = operationCount;
        this.test = test;
        this.iftrue = iftrue;
        this.iffalse = iffalse;
        this.ev = ev
    }
}

var Solution1 = () => {
    var monkeys = []
    var currentMonkey = null
    for (var i = 0; i < data.length; i++) {
        if (data[i].includes("Monkey")) {
            currentMonkey = new Monkey(data[i].split(" ")[1][0])
        } else if (data[i].includes("Starting items:")) {
            currentMonkey.items = data[i].split("  Starting items: ")[1].replaceAll(", ", ",").split(",")
        } else if (data[i].includes("  Operation: ")) {
            var t = data[i].split("  Operation: new = ")[1].split(" ")
            currentMonkey.operationSymbol = t[1]
            currentMonkey.operationCount = t[2]
        } else if (data[i].includes("  Test: divisible by ")) {
            currentMonkey.test = data[i].split("  Test: divisible by ")[1]
        } else if (data[i].includes("    If true: throw to monkey ")) {
            currentMonkey.iftrue = data[i].split("    If true: throw to monkey ")[1]
        } else if (data[i].includes("    If false: throw to monkey ")) {
            currentMonkey.iffalse = data[i].split("    If false: throw to monkey ")[1]
        } else {
            monkeys.push(currentMonkey)
            currentMonkey = null
        }
    }

    var inspected = new Array(monkeys.length).fill(0)
    for (var i = 0; i < 20; i++) {
        for (var m = 0; m < monkeys.length; m++) {
            while (monkeys[m].items.length > 0) {
                var item = monkeys[m].items.pop()
                if (monkeys[m].operationSymbol === "*") {
                    if (monkeys[m].operationCount === "old") {
                        item = Math.floor(parseInt(item) * parseInt(item) / 3)
                    } else {
                        item = Math.floor(parseInt(item) * parseInt(monkeys[m].operationCount) / 3)
                    }
                } else {
                    if (monkeys[m].operationCount === "old") {
                        item = Math.floor((parseInt(item) + parseInt(old)) / 3)
                    } else {
                        item = Math.floor((parseInt(item) + parseInt(monkeys[m].operationCount)) / 3)
                    }
                }
                inspected[m] += 1
                if (item % parseInt(monkeys[m].test) === 0) {
                    monkeys[parseInt(monkeys[m].iftrue)].items.push(item)
                } else {
                    monkeys[parseInt(monkeys[m].iffalse)].items.push(item)
                }
            }
        }
    }
    inspected.sort((a, b) => b - a)
    return inspected[0] * inspected[1]
}

var Solution2 = () => {
    var monkeys = []


    var currentMonkey = null
    for (var i = 0; i < data.length; i++) {
        if (data[i].includes("Monkey")) {
            currentMonkey = new Monkey(data[i].split(" ")[1][0])
        } else if (data[i].includes("Starting items:")) {
            currentMonkey.items = data[i].split("  Starting items: ")[1].replaceAll(", ", ",").split(",")
        } else if (data[i].includes("  Operation: ")) {
            var t = data[i].split("  Operation: new = ")[1]
            currentMonkey.ev = t
        } else if (data[i].includes("  Test: divisible by ")) {
            currentMonkey.test = data[i].split("  Test: divisible by ")[1]
        } else if (data[i].includes("    If true: throw to monkey ")) {
            currentMonkey.iftrue = data[i].split("    If true: throw to monkey ")[1]
        } else if (data[i].includes("    If false: throw to monkey ")) {
            currentMonkey.iffalse = data[i].split("    If false: throw to monkey ")[1]
        } else {
            monkeys.push(currentMonkey)
            currentMonkey = null
        }
    }
    var p = 1
    for (var m = 0; m < monkeys.length; m++) {
        p *= monkeys[m].test
    }

    var inspected = new Array(monkeys.length).fill(0)
    for (var i = 0; i < 10000; i++) {
        for (var m = 0; m < monkeys.length; m++) {
            while (monkeys[m].items.length > 0) {
                var old = monkeys[m].items.shift() % p
                old = eval(monkeys[m].ev)
                inspected[m] += 1
                if (old % parseInt(monkeys[m].test) === 0) {
                    monkeys[parseInt(monkeys[m].iftrue)].items.push(old)
                } else {
                    monkeys[parseInt(monkeys[m].iffalse)].items.push(old)
                }
            }
        }
    }
    console.log(inspected)
    inspected.sort((a, b) => b - a)
    return inspected[0] * inspected[1]
}
console.log(Solution2())