/**
 * Created by litleleprikon on 03/05/2017.
 */

import {defaultStore, reducer} from "./chatReducer";

describe('reducers', () => {
  describe('chatReducer', () => {
    it('should return initial state', () => {
      expect(
        reducer(undefined, {})
      ).toEqual(defaultStore);
    });
    it('should react on message changed', () => {
      let messageText = 'Changed message';
      expect(reducer(defaultStore,
        {
          type: 'MESSAGE_CHANGED',
          payload: messageText
        }))
        .toEqual({...defaultStore, currentMessage: messageText})
    });
  });
});