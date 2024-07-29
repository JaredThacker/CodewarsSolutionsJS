function findAverage(array) {
  let accum = 0
  if (array.length === 0){
    return 0
  }
  else {
  for(let i=0; i<array.length; i++){
    accum += array[i] 
  }
  let average = accum/array.length
  return average;
  }
}