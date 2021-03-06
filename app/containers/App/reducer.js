/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can change our
 * application state.
 * To add a new action, add it to the switch statement in the reducer function
 *
 * Example:
 * case YOUR_ACTION_CONSTANT:
 *   return state.set('yourStateVariable', true);
 */

import { fromJS } from 'immutable';

import {
  OPEN_MENU,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  opened: false,
});

function appReducer(state = initialState, action) {
  switch (action.type) {
    case OPEN_MENU:
      return state
        .set('opened', !state.get('opened'));
    default:
      return state;
  }
}

export default appReducer;
