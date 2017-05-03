/**
 * Created by litleleprikon on 03/05/2017.
 */

import {globalReducer} from "./index";


describe('reducers', () => {
  describe('globalReducer', () => {
    it('should return the initial state', () => {
      expect(
        globalReducer(undefined, {})
      ).toEqual({
        banned: true,
      });
    });
  });
});