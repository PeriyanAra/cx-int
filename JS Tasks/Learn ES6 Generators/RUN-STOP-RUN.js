function *range(from, to) {
    let start = from;

    while(start <= to){
        yield start;
        start++;
    }
}

for (var r of range(5, 10)) {
    console.log( r );
}