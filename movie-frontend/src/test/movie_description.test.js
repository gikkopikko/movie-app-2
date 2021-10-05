// import Enzyme, {mount, shallow, render} from './enzyme' // IMPORT STMT FROM EMZYME
import Enzyme, {mount, shallow, configure, render} from 'enzyme'
import MovieDesc from '../components/MovieDescription' //IMPORT YOUR COMPONENT
import React from 'react';

import Adapter from 'enzyme-adapter-react-16';
import renderer from 'react-test-renderer';
configure({ adapter: new Adapter() }); //enzyme - react 16 hooks support

describe("tests", () => {
    describe("movie-description-test", () => {
      it("to check whether the movie description component is loaded or not", () => {
        const wrapper = shallow(<MovieDesc match={match} />);
      });
    });
  });
  
  const match = {
    path: "/movie/:movieId",
    url: "/movie/horror1",
    isExact: true,
    params: {
      movieId: "horror1",
    },
  };