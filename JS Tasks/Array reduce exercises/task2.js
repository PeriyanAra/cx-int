function stringConcat(arr) {
    return arr.reduce( (sum, num) => sum + num.toString() );
}

console.log(stringConcat([1,2,3])) // "123"