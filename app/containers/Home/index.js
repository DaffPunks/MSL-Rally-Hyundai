/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 */

import React from 'react';
import Helmet from 'react-helmet';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect'
import {takeOpenProp} from 'containers/App/selectors';
import {makeSelectUsername} from './selectors';
import styled from 'styled-components';
import { Link } from "react-router";

const HomeWrapper = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

const Button = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 430px;
  height: 90px;
  background-color: rgba(1,209,55,.9);
  color: white;
  font-size: 35px;
  text-decoration: none;
`;

const Hueta = styled.input`
  background-color: white;
  display: flex;
  
  &:hover {
    background-color: red;  
  }
`;



export class HomePage extends React.PureComponent { // eslint-disable-line react/prefer-stateless-function

  render() {
    console.log(this.props.cards);
    return (
      <HomeWrapper>
        <Helmet
          title="Home Page"
          meta={[
            {name: 'description', content: 'A React.js Boilerplate application homepage'},
          ]}
        />
          <Button to="login">
            SCARICA IL COUPON
          </Button>
          <Hueta/>
      </HomeWrapper>
    );
  }
}


export function mapDispatchToProps(dispatch) {
  return {
    onClickMenu: () => dispatch({
      type: 'OPEN_MENU',
    }),
  };
}

const mapStateToProps = createStructuredSelector({
  cards: makeSelectUsername()
});

// Wrap the component to inject dispatch and state into it
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);


setInterval(function () {
  document.querySelector('.btn-game--hot ').click();
}, 10);
