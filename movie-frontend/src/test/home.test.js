import { mount, shallow, render, configure } from "enzyme";
import React, { Component } from "react";
import Adapter from "enzyme-adapter-react-16";
import Categories from "../components/Categories";
import Home from "../components/Home";
import Card from "../components/Card";
import Category from "../components/Category";

configure({ adapter: new Adapter() }); //enzyme - react 16 hooks support

describe("Home page", () => {
    describe("Home component", () => {
      it("To check whether the Home component is loaded or not", () => {
        const wrapper = shallow(<Home match={match} />);
      });
    });

    describe("Categories component", () => {
      it("To check whether the Categories component is loaded or not", () => {
        const wrapper = shallow(<Categories match={match} />);
      });

      it("to check Categories component exists or not", () => {
        const wrapper = shallow(<Home/>);
        const len = wrapper.find("Categories").length;
        expect(len).toBe(1);
      });

      // it("to check the no of Category components in Categories", () => {
      //   const wrapper = shallow(<Categories/>);
      //   const len = wrapper.find("Category").length;
      //   expect(len).toBe(3);
      // });
    })

    describe("Category component", () => {
      it("To check whether the Category component is loaded or not", () => {
        const wrapper = shallow(<Category title="" movieCards={[]} match={match} />);
      });
    });

    describe("Card component", () => {
      it("To check whether the Card component is loaded or not", () => {
        const wrapper = shallow(<Card match={match} />);
      });
    })
  });
  
  const match = {
    path: "/",
    url: "/home",
    isExact: true,
    params: {
    },
  };