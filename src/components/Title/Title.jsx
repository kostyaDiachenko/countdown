import React from 'react';
import PropTypes from 'prop-types';
import './Title.css';

const Title = ({ cashValue }) => (
  <h1 className="title">Get your free <span className="title__value">£{cashValue}</span> now</h1>
);

Title.propTypes = {
  cashValue: PropTypes.number.isRequired,
};

export default Title;
