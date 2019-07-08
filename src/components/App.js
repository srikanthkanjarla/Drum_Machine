import React, { useState } from 'react';
import Display from './DisplayScreen';
import DrumKitControls from './DrumKitControls';
import DrumKitKeyPad from './DrumKitKeyPad';
import './App.scss';

const App = () => {
  const [power, setPower] = useState(false);

  return (
    <div className="app">
      <h1>Drum Machine</h1>
      <div className="container">
        <Display value="Hello" />
        <DrumKitControls power={power} setPower={setPower} />
        <DrumKitKeyPad />
      </div>
    </div>
  );
};

export default App;
