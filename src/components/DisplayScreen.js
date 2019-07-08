import React from 'react';
import PropTypes from 'prop-types';
import './DisplayScreen.scss';

const Display = props => {
  const { value } = props;
  return (
    <div>
      <p className="display">{value}</p>
    </div>
  );
};

Display.propTypes = {
  value: PropTypes.string.isRequired,
};

export default Display;
