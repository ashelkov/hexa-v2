/*
 * GamePage
 *
 * Page where game happens
 */
import React from 'react';
import H1 from 'components/H1';
import HexagonMesh from './HexagonMesh';
import Button from '../../components/Button';

class GamePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    this.drawField();
  }

  drawField = () => {
    const width = 768;
    const height = 510;
    const radius = 10;

    const topology = hexTopology(radius, width, height);
    const projection = hexProjection(radius);
    const path = d3.geo.path().projection(projection);

    // clear SVG container before re-drawing
    const container =  d3.select('#hexagon-container');
    container.selectAll('*').remove();

    const svg = container.append('svg')
      .attr('width', width)
      .attr('height', height);

    svg.append('g')
      .attr('class', 'hexagon')
      .selectAll('path')
      .data(topology.objects.hexagons.geometries)
      .enter().append('path')
      .classed('fill', (d) => Boolean(d.fill))
      .attr('d', (d) => path(topojson.feature(topology, d)))
      .attr('row', (d) => d.row - 1)
      .attr('col', (d) => d.col + 1)
      .on('mousedown', mousedown)
      .on('mousemove', mousemove)
      .on('mouseup', mouseup);

    svg.append('path')
      .datum(topojson.mesh(topology, topology.objects.hexagons))
      .attr('class', 'mesh')
      .attr('d', path);

    const border = svg.append('path')
      .attr('class', 'border')
      .call(redraw);

    let mousing = 0;

    function mousedown(d) {
      mousing = d.selected ? -1 : +1;
      mousemove.apply(this, arguments);
    }

    function mousemove(d) {
      if (mousing) {
        d3.select(this).classed('selected', d.selected = mousing > 0);
        border.call(redraw);
      }
    }

    function mouseup() {
      mousemove.apply(this, arguments);
      mousing = 0;
    }

    function redraw(border) {
      border.attr('d', path(topojson.mesh(topology, topology.objects.hexagons,
        function(a, b) { return a.selected ^ b.selected; }
      )));
    }

    function hexTopology(radius, width, height) {
      const dx = radius * 2 * Math.sin(Math.PI / 3),
        dy = radius * 1.5,
        m = Math.ceil((height + radius) / dy) + 0,
        n = Math.ceil(width / dx) + 0,
        geometries = [],
        arcs = [];

      for (let j = -1; j <= m; ++j) {
        for (let i = -1; i <= n; ++i) {
          const y = j * 2, x = (i + (j & 1) / 2) * 2;
          arcs.push([[x, y - 1], [1, 1]], [[x + 1, y], [0, 1]], [[x + 1, y + 1], [-1, 1]]);
        }
      }

      for (let j = 0, q = 3; j < m; ++j, q += 6) {
        for (let i = 0; i < n; ++i, q += 3) {
          if (j < 2) continue; // ignore first 2 rows
          if (i === n - 1) continue; // ignore last column
          if (i === 0 && j % 2 === 1) continue; // ignore first cell of odd rows
          geometries.push({
            type: 'Polygon',
            arcs: [[q, q + 1, q + 2, ~(q + (n + 2 - (j & 1)) * 3), ~(q - 2), ~(q - (n + 2 + (j & 1)) * 3 + 2)]],
            fill: Math.round(Math.random()),
            row: j,
            col: i,
            selected: 0,
          });
        }
      }

      return {
        transform: {translate: [0, 0], scale: [1, 1]},
        objects: {hexagons: {type: 'GeometryCollection', geometries: geometries}},
        arcs: arcs,
      };
    }

    function hexProjection(radius) {
      const dx = radius * 2 * Math.sin(Math.PI / 3);
      const dy = radius * 1.5;

      return {
        stream: (stream) => ({
          point: (x, y) => { stream.point(x * dx / 2, (y - (2 - (y & 1)) / 3) * dy / 2); },
          lineStart: () => { stream.lineStart(); },
          lineEnd: () => { stream.lineEnd(); },
          polygonStart: () => { stream.polygonStart(); },
          polygonEnd: () => { stream.polygonEnd(); },
        }),
      };
    }
  };

  generateField = () => {
    console.log('generateField()');
    this.drawField();
  };

  render() {
    return (
      <div>
        <H1>HEXA v2</H1>
        <h3>The incredible war of colors</h3>
        <Button onClick={this.generateField}>Generate!</Button>
        <HexagonMesh id="hexagon-container" />
      </div>
    );
  }
}

export default GamePage;
