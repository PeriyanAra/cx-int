const _ = require("lodash");

var worker = function(arr) {
    let result = {};
    let res = [];
    
    _.forEach( arr, (item, key) => {

        let sz = _.size( _.filter( arr, (item2) => item2.username === item.username ) );
        result[item.username] = sz;

    } )

    _.forEach(result, (comm, name) => { res.push({ 'username': name, 'comment_count': comm }) });
    return _.sortBy( res, (it) => { return -it.comment_count } );
};

module.exports = worker;