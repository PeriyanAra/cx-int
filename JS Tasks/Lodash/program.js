const _ = require("lodash");

var worker = function(obj) {
    
    let mytemplate = "Hello <%= name %> (logins: <%= login.length %>)";

    return _.template(mytemplate)(obj);

};

module.exports = worker;