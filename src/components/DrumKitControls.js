import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import './DrumKitControls.scss';

const DrumKitControls = props => {
  const { power, volume, soundBank, handlePower, handleSelect, handleVolume } = props;

  return (
    <div className="controls-wrapper">
      <div className="control-row">
        <div className="control-col-1">
          <button type="button" className={`power-btn ${power ? 'active' : ''}`} onClick={() => handlePower(!power)}>
            <FontAwesome name="power-off" size="2x" className="power-icon fa-fw" />
          </button>
        </div>
        <div className="control-col-2 select-kit">
          <select value={soundBank} onChange={handleSelect} disabled={!power}>
            <option value="piano">Piano</option>
            <option value="heater">Heater</option>
          </select>
        </div>
        <div className="control-col-3">
          <button type="button" className="volume-btn">
            <span>
              <FontAwesome
                size="2x"
                name={`${volume < 0.4 ? 'volume-down' : 'volume-up'}`}
                className="volume-icon fa-fw"
              />
              <input
                type="range"
                id="volume"
                name="volume"
                min="0"
                max="10"
                value={volume * 10}
                onChange={handleVolume}
                disabled={!power}
              />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

DrumKitControls.propTypes = {
  power: PropTypes.bool.isRequired,
  volume: PropTypes.number.isRequired,
  soundBank: PropTypes.string.isRequired,
  handlePower: PropTypes.func.isRequired,
  handleSelect: PropTypes.func.isRequired,
  handleVolume: PropTypes.func.isRequired,
};

export default DrumKitControls;
