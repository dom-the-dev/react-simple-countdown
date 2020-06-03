import React from 'react';
import './App.css';
import Countdown from "./components/Countdown";

function App() {
  return (
    <div className="countdown">
      <Countdown date={new Date('December 24, 2020 15:00')}/>
    </div>
  );
}

export default App;
