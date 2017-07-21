import * as React from 'react';
import Brain from './Brain';
import './App.styl';

class App extends React.Component {

  render() {
    return (
      <div className='app'>
        <Brain />
        <h1>Nerv</h1>
        <h2>
          Real-time performance monitoring<br />
          for cryptocurrency miners
        </h2>
      </div>
    )
  }

}

export default App;
