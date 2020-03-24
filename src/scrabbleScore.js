let SCRABBLE_TILE_SCORES = {
  a: 1, b: 3, c: 3, d: 2, e: 1,  f: 4,
  g: 2, h: 4, i: 1, j: 8, k: 5,  l: 1,
  m: 3, n: 1, o: 1, p: 3, q: 10, r: 1,
  s: 1, t: 1, u: 1, v: 4, w: 4,  x: 8,
  y: 4, z: 10,
};

/**
 * Given a word, returns its scrabble score. Each letter
 * is assigned a point value. A word's score is the sum
 * of the point values of its letters.
 *
 * The SCRABBLE_TILE_SCORES object above defines how many
 * points each letter is worth.
 *
 * The function should be case insensitive.
 *
 * If you don't know what Scrabble is, see:
 *   https://en.wikipedia.org/wiki/Scrabble
 *
 * @param {string} word - A word
 * @returns {number} The word's scrabble score
 */

function scrabbleScore(word) {
  // Coerce string to all lower case
  word = word.toLowerCase();

  let scoreAccumulator = 0;
  for (let letter of word) {
    scoreAccumulator += SCRABBLE_TILE_SCORES[letter];
  }
  return scoreAccumulator;

}

if (require.main === module) {
  console.log('Running sanity checks for scrabbleScore:');

  console.log(scrabbleScore('aaa') === 3);
  console.log(scrabbleScore('aaa') === scrabbleScore('AaA'));

  // Add your own sanity checks here.
  // How else will you be sure your code does what you think it does?
  let tests = [
    {
      word: 'hello',
      expected: 8
    },
    {
      word: 'world',
      expected: 9
    },
    {
      word: 'will',
      expected: 7
    }
  ];
  for (let test of tests) {
    console.log(scrabbleScore(test.word) === test.expected);
  }
}

module.exports = scrabbleScore;
