import React from "react";
import App from "./App";
import Header from "./header/Header";
import Body from "./body/Body";
import {shallow} from "enzyme";

describe('components', () => {
  describe('App', () => {
    it('renders without crashing and contains subviews', () => {
      const wrapper = shallow(<App />);
      const head = <Header />;
      const body = <Body />;
      expect('contains Head', wrapper.contains(head));
      expect('contains Body', wrapper.contains(body));
    });
  });
});