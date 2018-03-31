function reduce(arr, fn, initial) {
      
	var obj = {};	

	function fn(ar) {
		if(ar.length){
			if(!obj[ar[0]]) {
				obj[ar[0]] = 1;
			}
			else{
				obj[ar[0]]++;
			}

			fn(ar.slice(1));
		}
	}
	fn(arr);

	return obj;
}
    
module.exports = reduce