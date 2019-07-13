import React from 'react';
import PropTypes from 'prop-types';
import DrumPadKey from './DrumPadKey';
import './DrumKitKeyPad.scss';

const KeyPad = props => {
  const drumPadKeys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
  const { handleClick, activeKey, power } = props;

  return (
    <div className="drumkit-key-pad">
      {drumPadKeys.map(key => {
        return (
          <DrumPadKey
            label={key}
            key={key}
            handleClick={handleClick}
            style={`${key === activeKey ? 'active-key' : ''}`}
            disable={!power}
          />
        );
      })}
    </div>
  );
};

KeyPad.propTypes = {
  activeKey: PropTypes.string.isRequired,
  power: PropTypes.bool.isRequired,
  handleClick: PropTypes.func.isRequired,
};
export default KeyPad;
