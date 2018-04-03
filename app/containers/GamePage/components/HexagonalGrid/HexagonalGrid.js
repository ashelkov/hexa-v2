import React, { PropTypes as T } from 'react';
import { List } from 'immutable';
// components
import StyledGrid from './StyledGrid';
// helpers
import { hexProjection, hexTopology } from './helper';

class HexagonalGrid extends React.Component {

  componentDidMount() {
    this.initializeField();
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps()', nextProps);
    if (nextProps.field !== this.props.field) {
      this.redrawField(nextProps.field);
    }
  }

  initializeField = () => {
    const width = 768;
    const height = 510;
    const radius = 9;

    const topology = hexTopology(radius, width, height);
    const projection = hexProjection(radius);
    const path = d3.geo.path().projection(projection);

    // clear SVG container before re-drawing
    const container =  d3.select('#hexagonal-grid');
    container.selectAll('*').remove();

    const svg = container.append('svg')
      .attr('width', width)
      .attr('height', height);

    const getColor = d3.scale.category20c();

    svg.append('g')
      .attr('class', 'svg-grid')
      .selectAll('path')
      .data(topology.objects.hexagons.geometries)
      .enter().append('path')
      .style('fill', (d) => getColor(d.fill))
      .attr('class', 'hex')
      .attr('d', (d) => path(topojson.feature(topology, d)))
      .attr('row', (d) => d.row - 2)
      .attr('col', (d) => d.row % 2 ? d.col - 1 : d.col);

    svg.append('path')
      .datum(topojson.mesh(topology, topology.objects.hexagons))
      .attr('class', 'mesh')
      .attr('d', path);

    // todo: use d.selected to draw border
    const border = svg.append('path')
      .attr('class', 'border')
      .call(drawBorder);

    function drawBorder(border) {
      border.attr('d', path(topojson.mesh(topology, topology.objects.hexagons,
        function(a, b) { return a.selected ^ b.selected; }
      )));
    }
  };

  redrawField = (newField) => {
    console.log('redrawField()', newField);
  };

  render() {
    return (
      <StyledGrid id="hexagonal-grid" />
    );
  }
}

HexagonalGrid.propTypes = {
  field: T.instanceOf(List),
  palette: T.instanceOf(List),
};

export default HexagonalGrid;
