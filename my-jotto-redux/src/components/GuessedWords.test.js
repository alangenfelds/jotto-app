import React from "react";
import { shallow } from "enzyme";

import { findByTestAttr, checkProps } from "../../test/testUtils";
import GuessedWords from "./GuessedWords";

const defaultProps = {
  guessedWords: [{ guessedWord: "train", letterMatchCount: 3 }]
};

const setup = (props = {}) => {
  const setupProps = { ...defaultProps, ...props };
  return shallow(<GuessedWords {...setupProps} />);
};

// test("renders without error", () => {
//   const wrapper = setup();
//   const component = findByTestAttr(wrapper, "component-guessed-words");
//   expect(component.length).toBe(1);
// });

test("does not throw warnings with expected props", () => {
  checkProps(GuessedWords, defaultProps);
});

describe("if the are no words guessed", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = setup({ guessedWords: [] });
  });

  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test("renders instructions to guess the word", () => {
    const instructions = findByTestAttr(
      wrapper,
      "component-guessed-instructions"
    );
    expect(instructions.text().length).not.toBe(0);
  });
});

describe("if the are some words guessed", () => {
  let wrapper;
  const guessedWords = [
    { guessedWord: "train", letterMatchCount: 3 },
    { guessedWord: "party", letterMatchCount: 5 },
    { guessedWord: "drink", letterMatchCount: 1 }
  ];

  beforeEach(() => {
    wrapper = setup({ guessedWords });
  });

  test("renders without error", () => {
    const component = findByTestAttr(wrapper, "component-guessed-words");
    expect(component.length).toBe(1);
  });

  test("renders guest words section", () => {
    const guessedWordsDiv = findByTestAttr(wrapper, "guessed-words-section");
    expect(guessedWordsDiv.length).toBe(1);
  });

  test("correct number of guessed words", () => {
    const guessedWordsRows = findByTestAttr(wrapper, "guessed-word");
    expect(guessedWordsRows.length).toBe(guessedWords.length);
  });
});

describe("if word is guessed", () => {});
