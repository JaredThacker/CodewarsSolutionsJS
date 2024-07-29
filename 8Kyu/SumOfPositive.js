function positiveSum(arr) {
    var count = 0
    for (var i=0; i < arr.length; i++)
      { if (arr[i]>0)
        
        count = count+arr[i]
      }
    return count
  }