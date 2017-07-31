import * as React from 'react';
import './SplashText.styl';

class SplashText extends React.Component {

  render() {
    return (
      <div className='splash-text'>
        <h1>Nerv</h1>
        <a href='#'>
          <h2>
            Monitor and manage<br/>
            your crypto mining operation<br/>
            from anywhere in the world<br/>
            <div className='arrow'>▼</div>
          </h2>
        </a>
      </div>
    );
  }

}

export default SplashText;
