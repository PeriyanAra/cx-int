const _ = require("lodash");

var worker = function(arr) {
    
    let total = {};
    let result = [];

    _.forEach( arr, (item) => {

        if(!total[item.article]){
            total[item.article] = item.quantity;
        }
        else {
            total[item.article] += item.quantity;
        }        

    } )

    _.forEach( total, (it, key) => {
        result.push( {'article': Number(key), 'total_orders': Number(it)} );
    } )

    return result.reverse();

};

module.exports = worker;