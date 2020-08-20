import React from 'react';
import PropTypes from 'prop-types';

import './parallax.scss';

const Parallax = (props) => {


  return (
    <div className="parallax" style={{ color: "white" }}>
      <div id="stars1" />
      <div id="stars2" />
      <div id="stars3" />
    </div>
  );
};

Parallax.contextTypes = {
  theme: PropTypes.any
};

export default Parallax;