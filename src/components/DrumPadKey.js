import React from 'react';
import PropTypes from 'prop-types';
import './DrumPadKey.scss';

const DrumPadKey = props => {
  const { label } = props;
  return <input type="button" value={label} className="btn" />;
};

DrumPadKey.propTypes = {
  label: PropTypes.string.isRequired,
};
export default DrumPadKey;
