function duckCount() {
	
	var count = 0;
	//var arr = Object.values(args)

	for (let i = 0; i < arguments.length; i++) {
		if(Object.prototype.hasOwnProperty.call(arguments[i], 'quack')){
			count++;
		}
	}

	return count;

}

module.exports = duckCount