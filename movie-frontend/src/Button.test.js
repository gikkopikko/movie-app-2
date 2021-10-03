import Enzyme, { mount, shallow, configure, render } from "enzyme";
import Login from "./components/login.component";

import React from "react";
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() }); 
describe('tests',()=>{

    describe('btn-test',()=>{
        it('to check whether the button component is loaded or not', () => {
            const wrapper = shallow(<Button value="Login" handleClick=""/>);
        });
    
        it('to check whether the button exist or not', () => {
            const wrapper = shallow(<Button value="Login" handleClick=""/>);
            const btn_len = wrapper.find('button').at(0).length;
            expect(btn_len).toBe(1);
        });
    
        it('to check whether the proper message is displayed on the button', () => {
            const wrapper = shallow(<Button value="test" handleClick=""/>);
            const text = wrapper.find("button").at(0).text();
            expect(text).toEqual("Login");
        });
    
        it('to check name of the button', () => {
            const wrapper = shallow(<Button value="Login" handleClick=""/>);
            const text = wrapper.find("button").at(0).text();
            expect(text).toEqual("Login");
        });
    });
    
  
    
    });
    