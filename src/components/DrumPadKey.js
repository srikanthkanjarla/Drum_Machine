import React from 'react';
import PropTypes from 'prop-types';
import './DrumPadKey.scss';

const DrumPadKey = props => {
  const { label, style, disable, handleClick } = props;
  return <input type="button" value={label} disabled={disable} className={`btn ${style}`} onClick={handleClick} />;
};

DrumPadKey.propTypes = {
  label: PropTypes.string.isRequired,
  style: PropTypes.string.isRequired,
  disable: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
export default DrumPadKey;
