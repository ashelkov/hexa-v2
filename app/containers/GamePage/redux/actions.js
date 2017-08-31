import { generateField } from '../helpers/generator';

import {
  GENERATE_NEW_FIELD,
  START_NEW_GAME,
} from './constants';

export function generateNewField(opts) {
  const { field, options } = generateField(opts);
  return {
    type: GENERATE_NEW_FIELD,
    field,
    options,
  };
}

export function startNewGame(payload) {
  return {
    type: START_NEW_GAME,
    payload,
  };
}
