// READ PARAGRAPH TEXT FILE AND MAKE IT ALL A LOWERCASE STRING //
const fs = require('fs');
let words = fs.readFileSync('Paragraph.txt').toString().toLowerCase();

// REMOVE SYMBOLS, NUMBERS, LINE BREAKS, DASHES, AND DOUBLE SPACES //
words = words.replace(/[,.":?0-9]/g, '');
words = words.replace(/(\r\n|\n|\r)/gm, " ");
words = words.replace(/-/g, " ");
words = words.replace(/\s+/g, " ");
console.log(words);
