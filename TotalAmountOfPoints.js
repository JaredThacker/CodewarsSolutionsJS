function points(games) {
    let points = 0
    for (let i=0; i<games.length; i++){
      let x = parseInt(games[i][0])
      let y = parseInt(games[i][2])
      if (x>y){
        points += 3
      }
      else if (x===y){
        points += 1
      }
    }
    return points
  }