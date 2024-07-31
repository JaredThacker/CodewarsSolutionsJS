function rot13(message){
    let rot = 'abcdefghijklmnopqrstuvwxyz';
    let modifiedString = "";
    for (let i=0;i<message.length;i++){
      // get our letter
      const messageLetter = message[i];
      
      // If it's a symbol(punctuation) or not a letter, then just add and continue
      if (!(rot.includes(messageLetter.toLowerCase()))) {
        // add and continue
        modifiedString += messageLetter;
        continue;
      }
      
      // Test if uppercase
      const isUpper = messageLetter === messageLetter.toUpperCase();
      
      // find the index of the letter in the alphabet (a is 1, b is 2, etc)
      const messageLetterAlphabetNumber = rot.indexOf(messageLetter.toLowerCase());
      
      // The next index of the rot13 (adding 13 to the index)
      const nextIndex = messageLetterAlphabetNumber + 13;
      
      // "wrapping" the index around the alphabet
      const moddedIndex = nextIndex % 26;
      
      // Seeing if the string is upper, if so, convert "wrapped" letter to uppercase, if not, just wrapped letter
      modifiedString += isUpper ? rot[moddedIndex].toUpperCase() : rot[moddedIndex];
    }
    
    return modifiedString;
  }