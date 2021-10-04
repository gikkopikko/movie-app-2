import { mount, shallow, render, configure } from "enzyme";
import React, { Component } from "react";
import Adapter from "enzyme-adapter-react-16";
import Categories from "../components/Categories";
import Home from "../components/Home";

configure({ adapter: new Adapter() }); //enzyme - react 16 hooks support

describe("Home page", () => {
    describe("Home", () => {
      it("To check whether the Home component is loaded or not", () => {
        const wrapper = shallow(<Home match={match} />);
      });
  
  });
  });
  
  const match = {
    path: "/",
    url: "/home",
    isExact: true,
    params: {
    },
  };