import React, { Component } from "react";
import "./App.css";

import GuessedWords from './components/GuessedWords';
import Congrats from './components/Congrats'

class App extends Component {

// constructor(props) {
//   super(props);

//   this.state = {
//     guessedWords: []
//   }
// }

  render() {
    return <div className="container">
      <h1>Jotto - Guess Words Game</h1>
      <Congrats success={true} />
      <GuessedWords guessedWords={[{ guessedWord: "train", letterMatchCount: 3}]} />
    </div>;
  }
}

export default App;
