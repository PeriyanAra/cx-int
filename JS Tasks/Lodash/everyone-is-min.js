const _ = require("lodash");

var worker = function(arr) {
    var result = {
        hot: [],
        warm: []
    };
    
    _.forEach(arr, (item, key) => {
        
        if( _.every( item,  (temp) => temp > 19 ) ){
            console.log('taqa');
            result.hot.push(key)
        }
        else if( _.some( item, (temp) => temp > 19 ) ){
            result.warm.push(key)
        }
    })

    return result
};

module.exports = worker;