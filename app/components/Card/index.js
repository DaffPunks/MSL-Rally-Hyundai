import React, { PropTypes, Children } from 'react';
import styled from 'styled-components';

const CardWrap = styled.div`
  width: 100%;
  height: 150px;
  background-color: #f64c73;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.div`
  font-size: 20px;
  color: #FFF;
  font-weight: bold;
`;


function Card(props) {
  return (
    <CardWrap>
      <Title>
        {props.title}
      </Title>
    </CardWrap>
  );
}


export default Card;
