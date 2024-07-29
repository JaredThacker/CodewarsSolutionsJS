function doubleChar(str) {
    let dblstr = ''
    for (let i = 0; i<str.length; i++){
      dblstr += (str[i]+str[i])
    }
    return dblstr
  
  }