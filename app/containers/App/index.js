/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect'
import { takeOpenProp } from 'containers/App/selectors';

import Header from "components/Header";
import Navigation from "components/Navigation";
import Wallpaper from './wallpaper.jpg';

const AppWrapper = styled.div`
  // width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;
`;

const Background = styled.div`
  width: 100%;
  height: calc(100% - 120px);
  background: url(${Wallpaper}) no-repeat center bottom;
  background-size: cover;
`;

export class App extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function
  componentWillMount() {
    document.querySelector('.loading').className = 'loading';
  }

  render() {
    console.log(this.props.cards);
    return (
      <AppWrapper>
        <Helmet
          titleTemplate="%s - React.js Boilerplate"
          defaultTitle="React.js Boilerplate"
          meta={[
            { name: 'description', content: 'A React.js Boilerplate application' },
          ]}
        />
        <Header onClick={this.props.onClickMenu} isOpen={this.props.opened}/>
        <Navigation opened={this.props.opened} />
        <Background>
          {React.Children.toArray(this.props.children)}
        </Background>
      </AppWrapper>
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};



export function mapDispatchToProps(dispatch) {
  return {
    onClickMenu: () => dispatch({
      type: 'OPEN_MENU',
    }),
  };
}

const mapStateToProps = createStructuredSelector({
  opened: takeOpenProp()
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
