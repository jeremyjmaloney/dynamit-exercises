// READ PARAGRAPH TEXT FILE AND SPLIT INTO SEPARATE WORDS //
const fs = require('fs');
let words = fs.readFileSync('Paragraph.txt').toString().split(' ');
console.log(words);
