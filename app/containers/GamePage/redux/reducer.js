import { fromJS } from 'immutable';
// constants
import { PALETTE } from '../constants/palette';
import {
  GENERATE_NEW_FIELD,
  START_NEW_GAME,
} from './constants';

// The initial state of the App
const initialState = fromJS({
  field: null,
  options: {
    field: { rows: 0, cols: 0, colors: 0 },
    type: 'classic',
  },
  palette: PALETTE,
  players: [
    { captured: [], color: null, next: [], score: null },
    { captured: [], color: null, next: [], score: null },
  ],
  state: {
    isStarted: false,
    isFinished: false,
    activePlayer: null,
    turns: 0,
  },
});

function gameReducer(state = initialState, action) {
  switch (action.type) {
    case GENERATE_NEW_FIELD:
      return state
        .set('field', fromJS(action.field))
        .setIn(['options', 'field'], fromJS(action.options));
    case START_NEW_GAME:
      return state
        .setIn(['state', 'isStarted'], true)
        .setIn(['state', 'activePlayer'], 0);
    default:
      return state;
  }
}

export default gameReducer;
