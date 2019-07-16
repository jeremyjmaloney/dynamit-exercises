// READ PARAGRAPH TEXT FILE AND MAKE IT ALL A LOWERCASE STRING //
const fs = require('fs');
let words = fs.readFileSync('Paragraph.txt').toString().toLowerCase();

// REMOVE SYMBOLS, NUMBERS, LINE BREAKS, DASHES, AND DOUBLE SPACES //
words = words.replace(/[,.":?0-9]/g, '');
words = words.replace(/(\r\n|\n|\r)/gm, " ");
words = words.replace(/-/g, " ");
words = words.replace(/\s+/g, " ");
// console.log(words);

// MAKE AN ARRAY OF ALL THE WORDS //
const allWords = words.split(' ');
// console.log(allWords);

// STORE ALL UNIQUE WORDS AND COUNTS IN AN OBJECT //
const uniqueWords = {};

for(let i = 0; i < allWords.length; i++) {
  let thisWord = allWords[i];
  if(uniqueWords[thisWord] === undefined) {
    uniqueWords[thisWord] = 1;
  } else {
    uniqueWords[thisWord]++;
  }
}
console.log(uniqueWords);
