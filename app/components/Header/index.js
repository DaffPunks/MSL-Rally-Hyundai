import React, { PropTypes, Children } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router';

const HeaderWrap = styled.div`
  width: 100%;
  height: 120px;
  background-color: #FFF;
  border-bottom: solid 2px #adbed4;
  display: flex;
  justify-content: center;
`;

const LinksWrap = styled.div`
  display: flex;
  align-items: flex-end;
  color: #4f89c2;
  text-decoration: none;
  margin-bottom: 10px;
  > * {
    text-decoration: none;
    color: #4f89c2;
    margin-right: 5px;
  }
`;


function Header(props) {
  return (
    <HeaderWrap>
      <LinksWrap>
        <Link to="/">
          HOME
        </Link>
        <div>|</div>
        <Link to="/hai">
          HAI UN CODICE
        </Link>
        <div>|</div>
        <Link to="/premi">
          PREMI
        </Link>
        <div>|</div>
        <Link to="/gioca">
          COME SI GIOCA
        </Link>
      </LinksWrap>
    </HeaderWrap>
  );
}


export default Header;
