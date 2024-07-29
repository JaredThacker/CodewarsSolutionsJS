const binaryArrayToNumber = arr => {
    let sum = 0;
    const revedUp = arr.reverse();
    for (let i = 0; i < arr.length; i++) {
      if (revedUp[i] === 1) {
        sum += Math.pow(2, i);
      } else {
        sum += 0;
      }
    }
    return sum;
  }