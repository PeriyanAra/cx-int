const spawn = require('child_process').spawn;
const duplexer = require("duplexer");

module.exports = function (cmd, args) {
    var childProc = spawn(cmd, args)
    return duplexer(childProc.stdin, childProc.stdout)
}