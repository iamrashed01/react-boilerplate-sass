/*
 *
 * App actions
 *
 */
import * as constants from './constants';

export function clearErrors() {
  return { type: constants.CLEAR_ERRORS };
}

export function clearSuccess() {
  return { type: constants.CLEAR_SUCCESS };
}
