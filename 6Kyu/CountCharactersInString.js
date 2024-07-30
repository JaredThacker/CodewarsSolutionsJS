function count(string) {
    let occu = {};
    for (let i = 0; i<string.length; i++){
      if (!(string[i] in occu)){
        occu[string[i]] = 1;
      }
      else {
        occu[string[i]] = occu[string[i]] + 1;
      }
    }
      
    return occu;
  }