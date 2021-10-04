import React, { Component } from "react";
import { Redirect } from "react-router-dom";
export default class Redirectto extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <Redirect to="/login" />
      </div>
    );
  }
}
