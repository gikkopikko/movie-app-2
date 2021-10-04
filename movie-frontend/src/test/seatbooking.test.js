import { mount, shallow, render, configure } from "enzyme";
import SeatBooking from "../components/SeatBooking";
import React, { Component } from "react";
import Adapter from "enzyme-adapter-react-16";
// import renderer from "react-test-renderer";

configure({ adapter: new Adapter() }); //enzyme - react 16 hooks support

describe("tests", () => {
  describe("seat-booking-test", () => {
    it("to check whether the seat booking component is loaded or not", () => {
      const wrapper = shallow(<SeatBooking match={match} />);
    });

    it("to check click of seat to be selected", () => {
      const wrapper = shallow(<SeatBooking match={match} />);
      let inst = wrapper.instance();
      inst.seatClick(45);
      expect(inst.state.selected).toContain(45);
      expect(inst.state.selected).toHaveLength(1);
    });

    it("to check click of seat again to be unselected", () => {
      const wrapper = shallow(<SeatBooking match={match} />);
      let inst = wrapper.instance();
      inst.seatClick(45);
      inst.seatClick(30);
      inst.seatClick(45);
      expect(inst.state.selected).toContain(30);
      expect(inst.state.selected).toHaveLength(1);
    });
  });
});

const match = {
  path: "/seatbooking/:movieId",
  url: "/seatbooking/horror1",
  isExact: true,
  params: {
    movieId: "horror1",
  },
};
