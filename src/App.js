import React from 'react';
import Countdown from "./components/Countdown";

function App() {
  return (
    <div>
      <Countdown showLabels={false} date={new Date('Jun 05, 2020 09:50')}/>
    </div>
  );
}

export default App;
