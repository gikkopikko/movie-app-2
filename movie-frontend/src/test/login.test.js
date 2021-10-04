import { mount, shallow, render, configure } from "enzyme";

import React, { Component } from "react";
import Adapter from "enzyme-adapter-react-16";
import Login from "../components/login.component";
// import renderer from "react-test-renderer";

configure({ adapter: new Adapter() }); //enzyme - react 16 hooks support

describe("tests", () => {
  describe("Login-test", () => {
    it("to check whether the Register component is loaded or not", () => {
      const wrapper = shallow(<Login match={match} />);
    });

});
});

const match = {
  path: "/",
  url: "/register",
  isExact: true,
  params: {
    movieId: "horror1",
  },
};