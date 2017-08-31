/*
 * GamePage
 *
 * Page where game happens
 */
import React, { PropTypes as T } from 'react';
// utils
import _ from 'lodash';
// redux
import { connect } from 'react-redux';
import {
  generateNewField,
  startNewGame,
} from './redux/actions';
// components
import Button from '../../components/Button';
import StyledContainer from './components/StyledContainer';
import PlayersPanel from './components/PlayersPanel/PlayersPanel';
import HexagonalGrid from './components/HexagonalGrid/HexagonalGrid';
import ColorPicker from './components/ColorPicker';

class GamePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  startNewGame = () => {
    const { generateNewField } = this.props; // eslint-disable-line
    generateNewField();
  };

  render() {
    return (
      <StyledContainer>
        <div className="title">Hexagon<span>WARZ</span></div>
        <PlayersPanel />
        <HexagonalGrid />
        <div className="bottom-panel">
          <ColorPicker />
        </div>
        <Button onClick={this.startNewGame}>New Game (F2)</Button>
      </StyledContainer>
    );
  }
}

GamePage.propTypes = {
  // injected by @connect
  generateNewField: T.func.isRequired,
  // startNewGame: T.func.isRequired,
  // field: T.array,
  // palette: T.array,
};

export default connect((state) => ({
  field: _.get(state, 'game.field'),
  palette: _.get(state, 'game.palette'),
}), {
  generateNewField,
  startNewGame,
})(GamePage);
