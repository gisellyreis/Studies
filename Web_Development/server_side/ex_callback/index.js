const rectagle = require("./rectangle");
var rect  = require('./rectangle'); ;

function solveRect(l, b) {
    console.log(`Solving for rectangle with l = ${l} and b = ${b}`);
    rect(l, b, (err, rectagle) => {
        if(err) console.log("ERROR: ", err.message);
        else {
            console.log(`The area of the rectangle is ${rectagle.area}`);
            console.log(`The perimeter of the rectangle is ${rectagle.perimeter}`);
        }
    });

    console.log("This statement after the call to rect()");
}

solveRect(2,4);
solveRect(0,4);