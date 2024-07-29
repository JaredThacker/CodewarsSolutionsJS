function spinWords(string){
    return string.split(" ").map((eachWord) => eachWord.length >= 5 ? eachWord.split("").reverse().join("") : eachWord).join(" ");
  }