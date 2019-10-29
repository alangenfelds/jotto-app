import React, { Component } from "react";
import { connect } from "react-redux";

class Input extends Component {
  render() {
    const { success } = this.props;
    return (
      <div data-test="component-input">
        {success ? null : (
          <form className="form-inline">
            <input
              data-test="input-box"
              type="text"
              className="mb-2 ms-sm-3"
              placeholder="enter guess"
            />
            <button
              data-test="submit-button"
              type="submit"
              className="btn btn-primary mb-2"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return { success: state.success };
};

export default connect(mapStateToProps)(Input);
