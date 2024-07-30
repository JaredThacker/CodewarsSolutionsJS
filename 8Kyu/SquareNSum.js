function squareSum(numbers){
    let sum = 0
    for (let i = 0; i<numbers.length; i++){
      let squares = numbers[i]**2;
      sum += squares
    }
    return sum
  }