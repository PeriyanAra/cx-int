function *flat (arr) {
    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === 'object') yield *flat(arr[i])
        else yield arr[i]
    }
}

  var A = [1, [2, [3, 4], 5], 6];
  for (var f of flat(A)) {
      console.log( f );
  }
  // 1 2 3 4 5 6