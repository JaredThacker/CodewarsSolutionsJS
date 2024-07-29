function isPalindrome(x) {
    x = x.toLowerCase()
    let reverse = x.split("").reverse().join("");
    if (x===reverse){
      return true
    }
    else {
      return false
    }
  }