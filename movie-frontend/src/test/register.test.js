import { mount, shallow, render, configure } from "enzyme";

import React, { Component } from "react";
import Adapter from "enzyme-adapter-react-16";
import Register from "../components/register.component";
// import renderer from "react-test-renderer";

configure({ adapter: new Adapter() }); //enzyme - react 16 hooks support

describe("tests", () => {
  describe("Register-test", () => {
    it("to check whether the Register component is loaded or not", () => {
      const wrapper = shallow(<Register match={match} />);
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