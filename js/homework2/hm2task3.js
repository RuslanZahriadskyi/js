function findLongestWord(strings = "") {
  let word = strings.split(" ");

  let longestWord = "";

  for (const words of word) {
    if (words.length > longestWord.length) {
      longestWord = words;
    }
  }
  return longestWord;
}

console.log(findLongestWord("quick brown fox jumped over the lazy dog"));

console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
// 'force'

// Напиши функцию findLongestWord(string = ""), которая принимает параметром произвольную строку

//     (в строке будут только слова и пробелы) и возвращает самое длинное слово в этой строке.
