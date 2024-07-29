function alphabetPosition(text) {
    const alpha = " abcdefghijklmnopqrstuvwxyz";
    const alphaSet = new Set(alpha.split("").slice(1));
    const textL = text.toLowerCase();
    
    return textL.split("")
      .filter((eachLetter) => alphaSet.has(eachLetter))
      .map((eachLetter) => alpha.indexOf(eachLetter).toString())
      .join(" ");
  }