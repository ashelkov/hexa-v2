import { injectGlobal } from 'styled-components';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  html,
  body {
    height: 100%;
    width: 100%;
  }

  body {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    margin: 0;
    padding: 0;
    background: #faf8ef;
    color: #776E65;
    font-size: 18px;
  }

  body.fontLoaded {
    font-family: 'Encode Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #app {
    min-height: 100%;
    min-width: 100%;
  }

  p,
  label {
    font-family: 'Encode Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
    line-height: 1.5em;
  }
  
  .primary {
    color: #43516c;
  }  
  .secondary {
    color: #e5e8c7;
  }  
  .color-danger {
    color: #d85426;
  }  
  .color-warning {
    color: #dba531;
  } 
  .color-info {
    color: #05659e;
  }
`;
