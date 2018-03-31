function total(arr) {
    return arr.reduce( (sum, num) => sum + num );
}

console.log(total([1,2,3])) // 6