import * as React from 'react';
import { SplashAnimation, SplashText } from './components';
import './App.styl';

class App extends React.Component {

  render() {
    return (
      <div className='app'>
        <div className='splash'>
          <SplashAnimation />
          <SplashText />
        </div>
      </div>
    );
  }

}

export default App;
