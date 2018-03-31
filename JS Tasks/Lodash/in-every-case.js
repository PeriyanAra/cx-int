const _ = require("lodash");

var worker = function(arr) {
    if(arr.length == 0) return []
    let result = {};
    let i = 1;
    _.forEach(arr, (item, key) => {
        if(item.population > 1){
            result[key] = {population: item.population, size: 'big'}
        }
        else if(item.population > 0.5){
            result[key] = {population: item.population, size: 'med'}
        }
        else{
            result[key] = {population: item.population, size: 'small'}
        }
    })
    return result ? result : [];
};

module.exports = worker;