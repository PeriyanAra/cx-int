const _ = require("lodash");

var worker = function(arr) {
    
    let average = 0;

    _.forEach(arr, (item) => {
        average += item.income;
    });
    average = average / arr.length;

    let underperform = _.filter(arr, it1 => it1.income <= average);
    let overperform = _.filter(arr, it1 => it1.income > average);

    underperform = _.sortBy(underperform, item => item.income)
    overperform = _.sortBy(overperform, item => item.income)

    return {
        'average': average,
        'underperform': underperform,
        'overperform': overperform
    };

};

module.exports = worker;