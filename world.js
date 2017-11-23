const vector = require('./vector').vector;
const elementFromChar = (legend, ch) => {
    if (ch == ' ')
        return null;
    const element = legend[ch]();
    element.originChar = ch;
    return element;
}

const charFromElement = (element) => {
    if (element == null) {
        return ' ';
    } else {        
        return element.originChar;
    }
}

const Grid = (width, height) =>
{
    const space = Array(width * height);
    return {
        space: space,
        width: width,
        height: height,
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

/* const grid = Grid(2,2);
grid.set(vector(1,1), 6);
console.log(grid.space); */

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
        grid: grid,
        toString() {
            let output = '';
            for (let y = 0; y < grid.height; y++) {
                for (let x = 0; x < grid.width; x++) {
                    let element = grid.get(vector(x, y));
                    output += charFromElement(element);
                }
                output += '\n';
            }
            return output;
        }
    }
}


const plan = ["############################",
            "#      #    #      o      ##",
            "#                          #",
            "#          #####           #",
            "##         #   #    ##     #",
            "###           ##     #     #",
            "#           ###      #     #",
            "#   ####                   #",
            "#   ##       o             #",
            "# o  #         o       ### #",
            "#    #                     #",
            "############################"];

w1 = World(plan, {
    '#': '#',
    'o': 'o'
});

console.log(w1.toString());