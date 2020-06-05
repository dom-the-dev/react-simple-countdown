import React from 'react';
import Countdown from "./components/Countdown";

function App() {
  return (
    <div>
      <Countdown date={new Date('Jun 05, 2021 09:50')}/>
    </div>
  );
}

export default App;
