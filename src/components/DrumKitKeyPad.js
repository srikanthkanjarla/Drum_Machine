import React from 'react';
import DrumPadKey from './DrumPadKey';
import './DrumKitKeyPad.scss';

const KeyPad = () => {
  return (
    <div className="drumkit-key-pad">
      <DrumPadKey label="a" />
      <DrumPadKey label="s" />
      <DrumPadKey label="d" />
      <DrumPadKey label="f" />
      <DrumPadKey label="g" />
      <DrumPadKey label="h" />
      <DrumPadKey label="j" />
      <DrumPadKey label="k" />
      <DrumPadKey label="l" />
    </div>
  );
};

export default KeyPad;
