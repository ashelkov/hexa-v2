import styled from 'styled-components';

const StyledGrid = styled.div`

  margin: 10px auto;

  .svg-grid {
    fill: white;
    pointer-events: all;
    opacity: .95;
  }

  .svg-grid path {
    -webkit-transition: fill 250ms linear;
    transition: fill 250ms linear;
  }

  .svg-grid .hex:hover {
    fill: #fff !important;  
  }

  .mesh {
    fill: none;
    stroke: #000;
    stroke-opacity: .5;
    stroke-width: .5;
    pointer-events: none;
  }

  .border {
    fill: none;
    stroke: #000;
    stroke-width: 1px;
    pointer-events: none;
  }
`;

export default StyledGrid;
