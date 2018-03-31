const _ = require("lodash");

var worker = function(arr) {
    
    return _.chain(arr)
        .sortBy( (item) => { return item } )
        .map( (item2) => { return `${item2}chained`.toUpperCase() } )

};

module.exports = worker;