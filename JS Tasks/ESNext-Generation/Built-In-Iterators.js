module.exports = function filterForNumbers(iterable) {
    let result = [];
    let i = 0;

    for (let n of iterable){
        if(typeof n == 'number'){
            result.push(n);
        }
    }

    return result;
}