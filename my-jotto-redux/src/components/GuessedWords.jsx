import React from "react";
import PropTypes from "prop-types";

const GuessedWords = props => {
  const { guessedWords } = props;

  return (
    <div className="" data-test="component-guessed-words">
      {guessedWords.length === 0 ? (
        <span data-test="component-guessed-instructions">
          Try to guess the secret word
        </span>
      ) : (
        <div data-test="guessed-words-section">
          <table>
            <thead>
              <tr>
                <th>Guess</th>
                <th>Matching Letters</th>
              </tr>
            </thead>
            <tbody>
              {guessedWords.map((word, idx) => (
                <tr key={idx} data-test="guessed-word">
                  <td>{word.guessedWord}</td>
                  <td>{word.letterMatchCount}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

GuessedWords.propTypes = {
  guessedWords: PropTypes.arrayOf(
    PropTypes.shape({
      guessedWord: PropTypes.string.isRequired,
      letterMatchCount: PropTypes.number.isRequired
    })
  ).isRequired
};

export default GuessedWords;
