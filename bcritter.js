const BouncingCritter = () => 
{
    return {
        direction: randomElement(directionNames),
        act(view) {

        }
    }
}

const directionNames = "n ne e se s sw w nw".split(" ");
const randomElement = (array) =>
{
    return array[Math.floor(Math.random() * array.length)];
}