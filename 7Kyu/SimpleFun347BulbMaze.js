function mazeswitch(str) {
    for (let i=0;i<str.length;i++){
      if (str[i] === 'x')
        str[i] = 'o'
      else if (str[i] === 'o')
        str[i] = 'x'
    }
    return str
  }
  
  function bulbMaze(maze) {
    let spl = maze.split("");
    for (let i=0;i< spl.length; i++){
      if (spl[i] == 'o')
        return false
      
    spl = mazeswitch(spl);
      
    }
    return true
  }