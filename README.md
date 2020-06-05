## React Countdown by Dom

A Simple countdown component for React.

### Installation: 

`npm i dom-simple-react-countdown`

`yarn add dom-simple-react-countdown`

#### Live Demo:
[Live Demo](https://domthedev.com/dom-simple-react-countdown/ "Dom Simple React Countdown")

#### Usage:
```javascript
import React from 'react';
import Countdown from "dom-simple-react-countdown";

function App() {
  return (
    <div>
      <Countdown date={new Date('Jun 05, 2020 09:50')}/>
    </div>
  );
}

export default App;
``` 

##### Props:
| Name  | Description | Type | Default | 
|---|---|---|---|
| date  | The Date to count down  | String | null | 
| showLabels  | Decide whetever to show or hide Labels | Boolean | true |

