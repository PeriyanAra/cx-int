///////// PROGRAM.JS ////////////////
import { PI, sqrt, square } from "./export";

var arg1 = process.argv[2];
    var arg2 = process.argv[3];

    console.log(PI);
    console.log(sqrt(+arg1));
    console.log(square(+arg2));


/////// EXPORT.JS ////////////////
export const PI = 3.141592;

    var _sqrt = function(s, x, last){
      return x != last ? _sqrt(s, (x + s / x) / 2.0, x) : x;
    };
    export let sqrt = function(s){
      return _sqrt(s, s/2.0, 0.0);
    };
    export let square = function(x) {
      return x * x;
    }; 