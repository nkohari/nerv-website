import * as React from 'react';
import { Splash } from './components';
import { AppSection, DashboardSection, PlatformSection, RemoteControlSection } from './sections';
import './App.styl';

class App extends React.Component {

  render() {
    return (
      <div className='app'>
        <Splash />
        <div>
          <PlatformSection />
          <AppSection />
          <DashboardSection />
          <RemoteControlSection />
        </div>
      </div>
    );
  }

}

export default App;
