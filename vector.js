const vector = (x, y) => 
{
    return {
        x: x,
        y: y,
        plus(vec) {
            return vector(x + vec.x, y + vec.y);
        },
        minus(vec) {
            return vector(x - vec.x, y - vec.y);
        },
        length() {
            return Math.sqrt(x * x + y * y).toFixed(2);
        }
    }
}

module.exports = {
    vector: vector,
};

/* const vec1 = vector(3, 4);
const vec2 = vector(1, 1);
console.log(vec1.length());

const vec3 = vec1.plus(vec2);
console.log(vec3);
console.log(vec3.x); */