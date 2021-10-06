import { mount, shallow, render, configure } from "enzyme";
import React, { Component } from "react";
import Profile from "../components/Profile";
import Adapter from "enzyme-adapter-react-16";

// import renderer from "react-test-renderer";

configure({ adapter: new Adapter() }); //enzyme - react 16 hooks support

describe("tests", () => {
  describe("seat-booking-test", () => {
    it("to check whether the profile component is loaded or not", () => {
      const wrapper = shallow(<Profile match={match} />);
    });

  });
});

const match = {
  path: "/profile",
  url: "/profile",
  isExact: true,
  params: {},
};
