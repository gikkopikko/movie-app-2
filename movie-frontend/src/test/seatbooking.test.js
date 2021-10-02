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
    //     it("to check the button exists or not", () => {
    //       const wrapper = shallow(<But value="test" handleClick="" />);
    //       const len = wrapper.find("button").length;
    //       expect(len).toBe(1);
    //     });
    //     it("to check the proper message is displayed on the button", () => {
    //       const wrapper = shallow(<But value="test" handleClick="" />);
    //       const text = wrapper.find("button").at(0).text();
    //       expect(text.trim()).toEqual("test");
    //     });
    //     it("to check the name of the button", () => {
    //       const wrapper = shallow(<But value="submit" handleClick="" />);
    //       const text = wrapper.find("button").at(0).text();
    //       expect(text.trim()).toEqual("submit");
    //     });
    //   });

    //   describe("count-test", () => {
    //     it("to check whether the count component is loaded or not", () => {
    //       const wrapper = shallow(<Count />);
    //     });
    //     it("to check the no of But in count", () => {
    //       const wrapper = shallow(<Count />);
    //       const len = wrapper.find("But").length;
    //       // expect(len).toBe(2);
    //       expect(len).toBe(1);
    //     });
    //     it("to check the proper message is displayed on the button", () => {
    //       const wrapper = shallow(<Count />);
    //       let inst = wrapper.instance();
    //       // expect(wrapper.instance().state("num")).toBe(0);
    //       expect(inst.state.num).toBe(0);
    //     });
    //     it("to check clicking of button", () => {
    //       // const wrapper = shallow(<Count />);
    //       const wrapper = shallow(<Count />);
    //       // expect(text.trim()).toEqual("submit");
    //       let inst = wrapper.instance();
    //       // wrapper.find("button").at(0).simulate("click");
    //       // let obj = new Count();
    //       // obj.handleInc();
    //       // expect(obj.state.num).toBe(1);
    //       inst.handleInc();
    //       expect(inst.state.num).toBe(1);
    //     });
    //     it("to check decraease in count", () => {
    //       // const wrapper = shallow(<Count />);
    //       const wrapper = shallow(<Count />);
    //       // expect(text.trim()).toEqual("submit");
    //       let inst = wrapper.instance();
    //       // wrapper.find("button").at(0).simulate("click");
    //       // let obj = new Count();
    //       // obj.handleInc();
    //       // expect(obj.state.num).toBe(1);
    //       inst.handleDec();
    //       expect(inst.state.num).toBe(-1);
    //     });
    //     it("to check increase in count1", () => {
    //       // const wrapper = shallow(<Count />);
    //       const wrapper = shallow(<Count />);
    //       // expect(text.trim()).toEqual("submit");

    //       wrapper.find("button").at(0).simulate("click");

    //       expect(wrapper.find("div").at(1).text().trim()).toEqual("1");
    //       // expect(wrapper.state.num).toBe(1);
    //     });

    //     it("to check whether it can be unmounted", () => {
    //       const wrapper = shallow(<Count />);

    //       wrapper.unmount();
    //     });
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
