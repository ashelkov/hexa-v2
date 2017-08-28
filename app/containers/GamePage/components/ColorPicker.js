import React from 'react';
// utils
import styled from 'styled-components';
// const
import { PALETTE } from '../constants/palette';

const Wrapper = styled.div`
  margin: 10px auto;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  
  .color-wrapper {
    margin-right: 5px;
    border-radius: 3px;
    transition: border .2s ease;
    cursor: pointer;
    transition: transform .2s ease;

    &:hover {
      transform: scale(1.2);
    }

    .color {
      width: 30px;
      height: 30px;
      border-radius: 3px;
      margin: 2px;
    }
  }
`;

const ColorPicker = (props) => {
  const colors = PALETTE.slice(0, 6);

  return (
    <Wrapper>
      {colors.map((color, index) => (
        <div className="color-wrapper" key={index}>
          <div className="color" style={{ backgroundColor: color }} />
        </div>
      ))}
    </Wrapper>
  );
};

export default ColorPicker;
