/*
 * GamePage
 *
 * Page where game happens
 */
import React, { PropTypes as T } from 'react';
import { List } from 'immutable';
// redux
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  generateNewField,
  startNewGame,
} from './redux/actions';
import {
  makeSelectField,
  makeSelectPalette,
} from './redux/selectors';
// components
import Button from '../../components/Button';
import StyledContainer from './components/StyledContainer';
import PlayersPanel from './components/PlayersPanel/PlayersPanel';
import HexagonalGrid from './components/HexagonalGrid/HexagonalGrid';
import ColorPicker from './components/ColorPicker';

class GamePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  startNewGame = () => {
    const { generateNewField } = this.props; // eslint-disable-line
    generateNewField();
  };

  render() {
    const { field, palette } = this.props;

    return (
      <StyledContainer>
        <div className="title">Hexagon<span>WARZ</span></div>
        <PlayersPanel />
        <HexagonalGrid filed={field} palette={palette} />
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
  field: T.instanceOf(List),
  palette: T.instanceOf(List),
};

export default connect(
  createStructuredSelector({
    field: makeSelectField(),
    palette: makeSelectPalette(),
  }), {
    generateNewField,
    startNewGame,
  }
)(GamePage);
