///////// PROGRAM.JS ////////////////
import mod from "./export";

var arg1 = process.argv[2];
    var arg2 = process.argv[3];

    console.log(mod.PI);
    console.log(mod.sqrt(+arg1));
    console.log(mod.square(+arg2));


/////// EXPORT.JS ////////////////
const PI = 3.141592;

    var _sqrt = function(s, x, last){
      return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
    };
    let sqrt = function(s){
      return _sqrt(s, s/2.0, 0.0);
    };
    let square = function(x) {
      return x * x;
    }; 

    export default {
        PI: PI,
        sqrt: sqrt,
        square: square
      };