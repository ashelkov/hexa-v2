import styled from 'styled-components';

const StyledGrid = styled.div`

  margin: 10px auto;

  .hexagon {
    fill: white;
    pointer-events: all;
    opacity: .95;
  }

  .hexagon path {
    -webkit-transition: fill 250ms linear;
    transition: fill 250ms linear;
  }

  .hexagon :hover {
    fill: #fff !important;
  }

  .hexagon .fill {
    fill: #5e5e5e;
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
