function *factorial(n){
    
    let curr = 1
    let total = 1
    while (n >= curr) {
        yield total = curr++ * total
    }

}

  for (var n of factorial(5)) {
    console.log(n)
  }
  // 1, 2, 6, 24, 120