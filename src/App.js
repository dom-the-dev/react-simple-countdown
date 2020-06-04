import React from 'react';
import Countdown from "./components/Countdown";

function App() {
  return (
    <div>
      <Countdown date={new Date('December 24, 2030 00:00')}/>
    </div>
  );
}

export default App;
