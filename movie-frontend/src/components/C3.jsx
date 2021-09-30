import React, { Component } from "react";

export default class C3 extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        compoenent 3
        <button
          onClick={() => {
            this.props.history.push({ pathname: "/component1" });
          }}
        >
          Redirect
        </button>
      </div>
    );
  }
}
