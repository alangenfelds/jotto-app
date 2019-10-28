import React, { Component } from "react";

export default props => {
  return (
    <div className="App" data-test="component-congrats">
      {props.success ? (
        <span data-test="congrats-message">
          Congratulations! You guessed the word!
        </span>
      ) : (
        <span></span>
      )}
    </div>
  );
};
