import { css } from 'styled-components';

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.5em 2em;
  text-decoration: none;
  border-radius: 4px;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  // font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  border: 2px solid #056571;
  color: #43516C;
  text-transform: uppercase;
  transition: .2s all;
  background-color: #43516c;
  color: #f5f5f5;
  
  &:hover {
    color: #fff;
  }
`;

export default buttonStyles;
