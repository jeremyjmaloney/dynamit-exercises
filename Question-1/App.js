// READ PARAGRAPH TEXT FILE AND MAKE IT ALL A LOWERCASE STRING //
const fs = require('fs');
let words = fs.readFileSync('Paragraph.txt').toString().toLowerCase();

// REMOVE SYMBOLS, NUMBERS, LINE BREAKS, DASHES, AND DOUBLE SPACES //
words = words.replace(/[,.":?0-9]/g, '');
words = words.replace(/[-\n]/g, ' ');
words = words.replace(/\s+/g, ' ');
// console.log(words);

// MAKE AN ARRAY OF ALL THE SEPARATE WORDS //
const allWords = words.split(' ');
// console.log(allWords);

// STORE ALL UNIQUE WORDS AND COUNTS IN AN OBJECT //
// STORE VALUES OF NEW WORDS IN AN ARRAY FOR REFERENCE //
const uniqueWords = {};
const wordNames = [];

for(let i = 0; i < allWords.length; i++) {
  let thisWord = allWords[i];
  if(uniqueWords[thisWord] === undefined) {
    uniqueWords[thisWord] = 1;
    wordNames.push(thisWord);
  } else {
    uniqueWords[thisWord]++;
  };
};
// console.log(uniqueWords);
// console.log(wordNames);

// SORT THE WORDS //
wordNames.sort(function(a, b) {
  return (uniqueWords[b] - uniqueWords[a]);
});
// console.log(wordNames);

// PRINT THE REPORT OF UNIQUE WORDS //
for(let i = 0; i < wordNames.length; i++) {
  console.log(`${wordNames[i]}: ${uniqueWords[wordNames[i]]}`);
}

// OUTPUT IN THE CONSOLE //
// the: 25
// of: 23
// a: 16
// to: 15
// and: 12
// it: 12
// in: 9
// on: 7
// for: 7
// or: 6
// text: 6
// words: 5
// that: 4
// with: 4
// from: 4
// at: 4
// an: 4
// said: 4
// who: 4
// was: 4
// are: 4
// some: 4
// their: 3
// be: 3
// about: 3
// americans: 3
// monday: 3
// block: 3
// what: 3
// were: 3
// by: 3
// there: 3
// no: 3
// as: 3
// letter: 3
// even: 3
// have: 3
// sure: 3
// confronted: 2
// print: 2
// them: 2
// millions: 2
// one: 2
// english: 2
// me: 2
// it's: 2
// resident: 2
// thomson: 2
// afternoon: 2
// parts: 2
// i've: 2
// but: 2
// added: 2
// after: 2
// whatever: 2
// article: 2
// local: 2
// this: 2
// time: 2
// my: 2
// large: 2
// never: 2
// anything: 2
// does: 2
// us: 2
// sections: 2
// important: 2
// news: 2
// i'm: 2
// if: 2
// landsman: 2
// washington: 1
// unable: 1
// rest: 1
// eyes: 1
// colorful: 1
// photograph: 1
// boldface: 1
// heading: 1
// could: 1
// easily: 1
// skimmed: 1
// forgotten: 1
// collectively: 1
// recoiled: 1
// when: 1
// solid: 1
// uninterrupted: 1
// dumbfounded: 1
// citizens: 1
// maine: 1
// california: 1
// gazed: 1
// helplessly: 1
// frightening: 1
// chunk: 1
// unsure: 1
// do: 1
// next: 1
// without: 1
// illustration: 1
// chart: 1
// embedded: 1
// youtube: 1
// video: 1
// ease: 1
// frozen: 1
// place: 1
// terrified: 1
// sight: 1
// long: 1
// unbroken: 1
// string: 1
// why: 1
// won't: 1
// just: 1
// tell: 1
// boston: 1
// charlyne: 1
// bombarded: 1
// overwhelming: 1
// mass: 1
// black: 1
// late: 1
// bullet: 1
// points: 1
// highlighted: 1
// looked: 1
// everywhere—there's: 1
// nothing: 1
// here: 1
// ow: 1
// reading: 1
// first: 1
// last: 1
// lines: 1
// attempt: 1
// get: 1
// gist: 1
// review: 1
// possibly: 1
// recipe: 1
// pm: 1
// deafening: 1
// sigh: 1
// heard: 1
// across: 1
// country: 1
// nation: 1
// grappled: 1
// daunting: 1
// cascade: 1
// syllables: 1
// whose: 1
// unfamiliar: 1
// upon: 1
// structure: 1
// stretched: 1
// endless: 1
// children: 1
// wailed: 1
// attention: 1
// bewildered: 1
// parents: 1
// businesses: 1
// shuttered: 1
// governments: 1
// ground: 1
// halt: 1
// scanned: 1
// vain: 1
// web: 1
// link: 1
// click: 1
// sources: 1
// also: 1
// reported: 1
// percent: 1
// rise: 1
// temple: 1
// rubbing: 1
// under: 1
// breath: 1
// cursing: 1
// around: 1
// demands: 1
// so: 1
// much: 1
// concentration: 1
// chicago: 1
// dale: 1
// huza: 1
// confusing: 1
// mound: 1
// early: 1
// expects: 1
// figure: 1
// everything: 1
// out: 1
// own: 1
// i: 1
// hate: 1
// seen: 1
// like: 1
// mark: 1
// shelton: 1
// high: 1
// school: 1
// teacher: 1
// st: 1
// paul: 1
// mn: 1
// stared: 1
// blankly: 1
// page: 1
// front: 1
// him: 1
// several: 1
// minutes: 1
// before: 1
// finally: 1
// holding: 1
// up: 1
// his: 1
// ear: 1
// want: 1
// public: 1
// grows: 1
// more: 1
// desperate: 1
// scholars: 1
// working: 1
// randomly: 1
// italicize: 1
// different: 1
// hoping: 1
// italics: 1
// will: 1
// land: 1
// allow: 1
// everyone: 1
// go: 1
// day: 1
// now: 1
// though: 1
// panicked: 1
// exhausted: 1
// continue: 1
// repetitively: 1
// search: 1
// single: 1
// column: 1
// top: 1
// bottom: 1
// right: 1
// left: 1
// looking: 1
// slightest: 1
// semblance: 1
// meaning: 1
// perhaps: 1
// blurb: 1
// speculated: 1
// ending: 1
// flood: 1
// sentences: 1
// may: 1
// medical: 1
// study: 1
// urgent: 1
// product: 1
// recall: 1
// notice: 1
// user: 1
// agreement: 1
// binding: 1
// contract: 1
// kind: 1
// until: 1
// segment: 1
// which: 1
// they: 1
// take: 1
// read: 1
// aloud: 1
// slow: 1
// calm: 1
// voice: 1
// while: 1
// highlighting: 1
// those: 1
// same: 1
// screen: 1
// can: 1
// say: 1
// however: 1
// remain: 1
// unfazed: 1
// virtual: 1
// hailstorm: 1
// alternating: 1
// consonants: 1
// vowels: 1
// determined: 1
// ignore: 1
// enough: 1
// they'll: 1
// let: 1
// know: 1
// other: 1
// way: 1
// detroit: 1
// janet: 1
// all: 1
// can't: 1
// serious: 1
// worthwhile: 1
// buried: 1
// deep: 1
// impenetrable: 1
// would: 1
// least: 1
// accompanying: 1
// photo: 1
// celebrity: 1
// humorous: 1
// title: 1
// containing: 1
// pop: 1
// culture: 1
// reference: 1
// is: 1
// pretty: 1
// doesn't: 1
// point: 1
// : 1
