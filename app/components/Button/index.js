import React, { PropTypes, Children } from 'react';


function Button(props) {
  // Render an anchor tag
  return (
    <button onClick={props.onClick}>
      Lol
    </button>
  );
}


export default Button;
