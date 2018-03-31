const _ = require("lodash");

var worker = function(arr) {
    return (_.sortBy(arr, 'quantity')).reverse()
};

module.exports = worker;