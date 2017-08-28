/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
// libs
import Helmet from 'react-helmet';
import styled from 'styled-components';
// components
import withProgressBar from 'components/ProgressBar';

const AppLayout = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  min-height: 100%;
  flex-direction: row;
  width: 100%;
`;

export function App(props) {
  return (
    <AppLayout>
      <Helmet
        titleTemplate="%s - React.js Boilerplate"
        defaultTitle="React.js Boilerplate"
        meta={[
          { name: 'description', content: 'A React.js Boilerplate application' },
        ]}
      />
      {React.Children.toArray(props.children)}
    </AppLayout>
  );
}

App.propTypes = {
  children: React.PropTypes.node,
};

export default withProgressBar(App);
