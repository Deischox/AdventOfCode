var fs = require('fs');
var data = fs.readFileSync('Day14/input.txt', 'utf8').split("\n");

var Solution1 = () => {
    var grid = Array.from(Array(200), () => new Array(600).fill("."))
    //DRAW GRID
    data.forEach(d => {
        var line = d.split(" -> ")
        line = line.map(l => l.split(","))
        for (x = 0; x <= line.length - 2; x++) {
            var start = [parseInt(line[x][1]), parseInt(line[x][0] - 400)]
            var goal = [parseInt(line[x + 1][1]), parseInt(line[x + 1][0] - 400)]
            if (start[0] === goal[0]) {
                var distance = Math.abs(start[1] - goal[1])
                var mult = (start[1] > goal[1] ? -1 : 1)
                for (var i = 0; i <= distance; i++) {
                    grid[start[0]][start[1] + mult * i] = "#"
                }
            } else {
                var distance = Math.abs(start[0] - goal[0])
                var mult = (start[0] >= goal[0] ? -1 : 1)
                for (var i = 0; i <= distance; i++) {
                    grid[start[0] + mult * i][start[1]] = "#"
                }
            }
        }

    })
    /*grid.forEach(g => fs.appendFile('grid.txt', (g.join("") + "\n"), err => {
        if (err) {
            console.error(err);
        }
        // file written successfully
    }))*/

    //grid.forEach(g => console.log(g))

    var count = 0
    var end = false
    while (!end) {
        var y = 0
        var x = 100
        var falling = true
        while (falling) {
            if (y === grid.length - 1) { falling = false; end = true }
            else if (grid[y + 1][x] === '.') y += 1
            else if (grid[y + 1][x - 1] === '.') { y += 1; x -= 1 }
            else if (grid[y + 1][x + 1] === '.') { y += 1; x += 1 }

            else falling = false

            //console.clear()
            //grid.forEach(g => console.log(g))
        }

        grid[y][x] = "o"
        count += 1


    }

    grid.forEach(g => fs.appendFile('final.txt', (g.join("") + "\n"), err => {
        if (err) {
            console.error(err);
        }
        // file written successfully
    }))
    return count - 1
}

var Solution2 = () => {
    var grid = Array.from(Array(200), () => new Array(1000).fill("."))
    //DRAW GRID
    var maxY = 0
    data.forEach(d => {
        var line = d.split(" -> ")
        line = line.map(l => l.split(","))
        for (x = 0; x <= line.length - 2; x++) {
            var start = [parseInt(line[x][1]), parseInt(line[x][0])]
            var goal = [parseInt(line[x + 1][1]), parseInt(line[x + 1][0])]

            if (start[0] > maxY) maxY = start[0]
            if (goal[0] > maxY) maxY = goal[0]

            if (start[0] === goal[0]) {
                var distance = Math.abs(start[1] - goal[1])
                var mult = (start[1] > goal[1] ? -1 : 1)
                for (var i = 0; i <= distance; i++) {
                    grid[start[0]][start[1] + mult * i] = "#"
                }
            } else {
                var distance = Math.abs(start[0] - goal[0])
                var mult = (start[0] >= goal[0] ? -1 : 1)
                for (var i = 0; i <= distance; i++) {
                    grid[start[0] + mult * i][start[1]] = "#"
                }
            }
        }

    })
    console.log(maxY)
    grid[maxY + 2] = new Array(600).fill('#')
    grid.forEach(g => fs.appendFile('grid2.txt', (g.join("") + "\n"), err => {
        if (err) {
            console.error(err);
        }
        // file written successfully
    }))

    //grid.forEach(g => console.log(g))

    var count = 0
    var end = false
    while (grid[0][500] !== "o") {
        var y = 0
        var x = 500
        var falling = true
        while (falling) {
            if (y === grid.length - 1) { falling = false; end = true }
            else if (grid[y + 1][x] === '.') y += 1
            else if (grid[y + 1][x - 1] === '.') { y += 1; x -= 1 }
            else if (grid[y + 1][x + 1] === '.') { y += 1; x += 1 }
            else falling = false

            //console.clear()
            //grid.forEach(g => console.log(g))
        }

        grid[y][x] = "o"
        count += 1
    }

    grid.forEach(g => fs.appendFile('final.txt', (g.join("") + "\n"), err => {
        if (err) {
            console.error(err);
        }
        // file written successfully
    }))
    return count
}

console.log(Solution2())