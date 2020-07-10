/*
 *
 * App reducer
 *
 */
import produce from 'immer';
import * as constants from './constants';

export const initialState = {
  error: null,
  success: null,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case constants.THROW_ERROR:
        draft.error = action.msg;
        break;
      case constants.CLEAR_ERRORS:
        draft.error = null;
        break;
      case constants.THROW_SUCCESS:
        draft.success = action.msg;
        break;
      case constants.CLEAR_SUCCESS:
        draft.success = null;
        break;
      default:
        break;
    }
  });

export default appReducer;
