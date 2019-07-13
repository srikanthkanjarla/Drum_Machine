/* eslint-disable jsx-a11y/media-has-caption */
import React, { useState, useEffect } from 'react';
import Display from './DisplayScreen';
import DrumKitControls from './DrumKitControls';
import DrumKitKeyPad from './DrumKitKeyPad';
import drumKitSounds from '../drumKitTracks';
import './App.scss';

const App = () => {
  const audioRef = React.createRef();
  const [power, setPower] = useState(false);
  const [activeKey, setActiveKey] = useState('');
  const [soundBank, setSoundBank] = useState('piano');
  const [volume, setVolume] = useState(0.7);
  const [displayMessage, setDisplayMessage] = useState('');
  const drumPadKeys = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];

  // set power ON/OFF
  const handlePower = () => {
    setPower(!power);
    setDisplayMessage(power ? '' : 'Welcome');
  };

  // select sound bank
  const handleSoundBank = event => {
    if (power) {
      const { value } = event.target;
      setSoundBank(value);
      setDisplayMessage(value);
    }
  };

  // update volume level
  const handleVolume = event => {
    const { value } = event.target;
    setVolume(value / 10);
    setDisplayMessage(`Volume ${value * 10}%`);
  };

  // play sound
  const handlePlaySound = async key => {
    if (power && audioRef.current) {
      const message = drumKitSounds[soundBank][key].title;
      const url = drumKitSounds[soundBank][key].src;

      try {
        audioRef.current.volume = volume;
        audioRef.current.src = url;
        await audioRef.current.play();
        setDisplayMessage(message);
      } catch (err) {
        setDisplayMessage('Error: Try again..!');
      }
    }
  };

  // handle click
  const handleClick = event => {
    if (power) {
      const { value } = event.target;
      handlePlaySound(value);
    }
  };

  // handle keypress and play sound and set active key to apply active style
  useEffect(() => {
    if (power) {
      document.onkeydown = event => {
        const key = event.key.toLowerCase();
        if (drumPadKeys.includes(key)) {
          handlePlaySound(key);
          setActiveKey(key);
        }
      };
      // unset activekey on keyup to remove active style on key
      document.onkeyup = event => {
        const key = event.key.toLowerCase();
        if (drumPadKeys.includes(key)) {
          setActiveKey('');
        }
      };
    }
  });

  return (
    <div className="app">
      <h1>Drum Machine</h1>
      <div className="container">
        <Display value={displayMessage} />
        <DrumKitControls
          power={power}
          volume={volume}
          soundBank={soundBank}
          handleVolume={handleVolume}
          handlePower={handlePower}
          handleSelect={handleSoundBank}
        />
        <DrumKitKeyPad power={power} activeKey={activeKey} handleClick={handleClick} />
      </div>
      <audio controls src="" ref={audioRef} className="audio-track">
        Your browser does not support the audio element.
      </audio>
    </div>
  );
};

export default App;
