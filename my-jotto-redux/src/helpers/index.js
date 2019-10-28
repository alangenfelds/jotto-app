export function getLetterMatchCounter(guessedWord, secretWord) {
  const secretLetterSet = new Set(secretWord.split(""));
  const guessedLetterSet = new Set(secretWord.split(""));

  return [...secretLetterSet].filter(letter => guessedLetterSet.has(letter)).length
}
