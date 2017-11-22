const vector = require('./vector').vector;

const Grid = (width, height) =>
{
    const space = Array(width * height);
    return {
        isInside(vector) {
            return (
                vector.x >= 0 && vector.x < width &&
                vector.y >= 0 && vector.y < height
            )
        },
        get(vector) {
            return space[vector.x + vector.y * width];
        },
        set(vector, value) {
            space[vector.x + vector.y * width] = value;
        }
    }
}

/* const grid = Grid(10,10);
console.log(grid.isInside(vector(5,5)));
grid.set(vector(5,5), 6);
console.log(grid.get(vector(5,5))); */

const World = (map, legend) => 
{
    const grid = Grid(map[0].length, map.length);
    map.forEach((line, y) => {
            for (let x = 0; x < line.length; x++) {
                grid.set(vector(x, y), 
                elementFromChar(legend, line[x]))
            };            
    })

    return {
        toString() {

        }
    }
}

const elementFromChar = (legend, ch) => {
    if (ch = ' ')
        return null;
    const element = legend[ch]();
    element.originChar = ch;
    return element;
}

const charFromElement = (element) => {
    if (element == null)
        return ' ';
    return element.originChar;
}