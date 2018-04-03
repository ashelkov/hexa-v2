/**
 * Game page selectors
 */

import { createSelector } from 'reselect';

const selectGame = (state) => state.get('game');

const makeSelectField = () => createSelector(
  selectGame,
  (gameState) => gameState.get('field')
);

const makeSelectPalette = () => createSelector(
  selectGame,
  (gameState) => gameState.get('palette')
);

export {
  selectGame,
  makeSelectField,
  makeSelectPalette,
};
