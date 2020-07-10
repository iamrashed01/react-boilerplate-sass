import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * The global state selectors
 */

const selectGlobal = state => state.app || initialState;

const makeSelectError = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.error,
  );
const makeSelectSuccess = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.success,
  );
export { selectGlobal, makeSelectError, makeSelectSuccess };
