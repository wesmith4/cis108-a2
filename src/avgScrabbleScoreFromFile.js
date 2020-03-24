let fs = require('fs');
let avgScrabbleScore = require('./avgScrabbleScore');

/**
 * Returns the average scrabble score of all the words the
 * given text file.
 *
 * Use fs.readFileSync to read the contents.
 *
 * Create some sample files yourself. We also supplied
 * sample-words.txt.
 */
function avgScrabbleScoreFromFile(fileName) {
  let content = fs.readFileSync(fileName, 'utf-8');
  let words = content.trim().split('\n');

  return avgScrabbleScore(words);

}

if (require.main === module) {
  console.log('Running sanity checks for avgScrabbleScoreFromFile:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  console.log(avgScrabbleScoreFromFile('./sample-words.txt'));
}

module.exports = avgScrabbleScoreFromFile;
