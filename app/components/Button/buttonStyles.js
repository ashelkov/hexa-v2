import { css } from 'styled-components';

const buttonStyles = css`
  display: inline-block;
  box-sizing: border-box;
  padding: 0.5em 1.5em;
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
  color: #43516C;
  text-transform: uppercase;
  transition: .2s all;
  background-color: #E86A22;
  color: #f5f5f5;
  
  &:hover {
    color: #fff;
  }
`;

export default buttonStyles;
