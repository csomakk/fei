/***
 * Please write a pure function, this will act as
 * our reducer that can be used on a Live Roulette game tile.
 * We will trigger actions like below, 
 * where payload is the new ball to add
 * 
 * { type: "BALL_CALLED", payload: 3 }
 * 
 * The state of the result should be:
 * {balls: Array:Number}
 * 
 * Goals
 * 
 * 1) Only FIVE balls available at one time, so drop the first one off when a new pick comes in
 * 2) No duplicate numbers are added
 * 
 */
const reducer = (current_state, action) => {
    // Write your solution here

}

// test
console.log(deepEqual(
    reducer({}, { type: "BALL_CALLED", payload: 3 }), 
    {balls: [3,4]}
));


// testing helper
function deepEqual(obj1, obj2) {
    if (typeof obj1 !== typeof obj2) return false;
    if (obj1 == null || obj2 == null) return obj1 === obj2;
    if (typeof obj1 !== 'object') return obj1 === obj2;
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    if (keys1.length !== keys2.length) return false;
    for (let key of keys1) {
        if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
            return false;
        }
    }
    return true;
}
