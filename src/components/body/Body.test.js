/**
 * Created by litleleprikon on 03/05/2017.
 */

import React from "react";
import {Body} from "./Body";
import {shallow} from "enzyme";

describe('components', () => {
  describe('Body', () => {
    it('renders without crashing and contains subviews', () => {
      const wrapper = shallow(<Body username="Emil"/>);
      expect('Works with username', wrapper.contains('Emil'));
    });
  });
});