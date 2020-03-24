let scrabbleScore = require('./scrabbleScore');

/**
 * Given an array of words, return the average scrabble
 * score.
 *
 * Use your implementation of scrabbleScore.
 */
function avgScrabbleScore(words) {
  let scores = words.map(scrabbleScore);

  return scores.reduce((a,b) => a+b) / scores.length;
}

if (require.main === module) {
  console.log('Running sanity checks for avgScrabbleScore:');

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  let tests = [
    {
      words: ['hello', 'world'],
      expected: 8.5
    },
    {
      words: ['my', 'name', 'is', 'will'],
      expected: 5.5
    },
    {
      words: ['hi', 'there', 'mom'],
      expected: 20/3
    }
  ];

  for (let test of tests) {
    console.log(avgScrabbleScore(test.words) === test.expected);
  }
}

module.exports = avgScrabbleScore;
