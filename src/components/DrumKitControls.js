import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import './DrumKitControls.scss';

const DrumKitControls = props => {
  const { power, setPower } = props;

  return (
    <div className="controls-wrapper">
      <div className="control-row">
        <div className="control-col-1">
          <button type="button" className={`power-btn ${power ? 'active' : ''}`} onClick={() => setPower(!power)}>
            <FontAwesome name="power-off" size="2x" className="power-icon fa-fw" />
          </button>
        </div>
        <div className="control-col-2 select-kit">
          <select>
            <option>Piano</option>
            <option>Heater</option>
          </select>
        </div>
        <div className="control-col-3">
          <button type="button" className="volume-btn">
            <span>
              <FontAwesome size="2x" name="volume-up" className="volume-icon fa-fw" />
              <input type="range" id="start" name="volume" min="0" max="100" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

DrumKitControls.propTypes = {
  power: PropTypes.bool.isRequired,
  setPower: PropTypes.func.isRequired,
};

export default DrumKitControls;
