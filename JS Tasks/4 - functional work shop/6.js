function countWords(inputWords) {
    
	var obj = {};
	obj[inputWords[0]] = 1;

	inputWords.reduce(function(a, b) {
		if(!obj[b]) {
			obj[b] = 1;
		}
		else{
			obj[b]++;
		}
	});

	return obj;

}
    
module.exports = countWords