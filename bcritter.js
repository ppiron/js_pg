const vector = require('./vector').vector;
const utils = require('./world');

const BouncingCritter = () => 
{
    return {
        direction: randomElement(directionNames),
        act(view) {
            if (view.look(direction) != ' ') {
                direction = view.find(' ') || 's';
            }
            return {
                type: 'move',
                direction: direction
            }
        }
    }
}

const directionNames = "n ne e se s sw w nw".split(" ");
const directions = {
    "n":  vector( 0, -1),
    "ne": vector( 1, -1),
    "e":  vector( 1,  0),
    "se": vector( 1,  1),
    "s":  vector( 0,  1),
    "sw": vector(-1,  1),
    "w":  vector(-1,  0),
    "nw": vector(-1, -1)
  };
const randomElement = (array) =>
{
    return array[Math.floor(Math.random() * array.length)];
}

const View = (world, vector) => {
    return {
        look(direction) {
            const target = vector.plus(directions[direction]);
            if (world.grid.isInside(target)) {
                return utils.charFromElement(world.grid.get(target));
            }
            return '#'
        },
        findAll(ch) {
            let found = [];
            for (dir in directions) {
                if (this.look(dir) == ch) {
                    found.push(dir);
                }
            }
            return found;
        },
        find(ch) {
            let found = this.findAll(ch);
            if (found.length == 0) {
                return null;
            }
            return randomElement(found);
        }
    }
}