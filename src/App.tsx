import * as React from 'react';
import Svg from './Svg';
import './App.styl';

class App extends React.Component {

  render() {
    return (
      <div className='app'>
        <div className='splash'>
          <div className='splash-animation'>
            <Svg src={require('assets/ring0.svg')} className='ring0' />
            <Svg src={require('assets/circuit0.svg')} className='circuit0' />
            <Svg src={require('assets/circuit1.svg')} className='circuit1' />
            <Svg src={require('assets/ring1.svg')} className='ring1' />
            <Svg src={require('assets/ring2.svg')} className='ring2' />
            <Svg src={require('assets/ring3.svg')} className='ring3' />
            <Svg src={require('assets/wave0.svg')} className='wave0' />
            <Svg src={require('assets/boxes.svg')} className='boxes' />
          </div>
          <div className='splash-text'>
            <h1>Nerv</h1>
            <h2>
              Monitor and manage<br/>
              your crypto mining operation<br/>
              from anywhere in the world
            </h2>
          </div>
        </div>
      </div>
    );
  }

}

export default App;
