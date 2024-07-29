function XO(str) {
    str = str.toLowerCase();
    const occurrences = { 'x': 0, 'o': 0 };
    for (let i = 0; i < str.length; i++) {
      if (str[i] in occurrences) {
        occurrences[str[i]] += 1;
      }
    }
    return new Set([...Object.values(occurrences)]).size === 1;
}