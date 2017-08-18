import styled from 'styled-components';

const HexagonMesh = styled.div`

  margin: 20px auto;

  .hexagon {
    fill: white;
    pointer-events: all;
  }

  .hexagon path {
    -webkit-transition: fill 250ms linear;
    transition: fill 250ms linear;
  }

  .hexagon :hover {
    fill: pink;
  }

  .hexagon .fill {
    fill: red;
  }

  .mesh {
    fill: none;
    stroke: #000;
    stroke-opacity: .2;
    pointer-events: none;
  }

  .border {
    fill: none;
    stroke: #000;
    stroke-width: 1px;
    pointer-events: none;
  }
`;

export default HexagonMesh;
