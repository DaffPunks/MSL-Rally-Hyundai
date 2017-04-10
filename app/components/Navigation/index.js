import React, { PropTypes, Children } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

const NavWrap = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background-color: #444;
`;

const NavLink = styled(Link)`
  color: white;
  font-size: 18px;
`;


function Navigation(props) {
  var display;
  props.opened ? display = 'flex' : display = 'none';

  return (
    <NavWrap style={{display: display}}>
      <NavLink to="/">
        Home
      </NavLink>
      <NavLink to="/asd">
        Doesn't Exist
      </NavLink>
    </NavWrap>
  );
}


export default Navigation;
