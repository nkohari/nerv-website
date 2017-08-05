import * as React from 'react';
import * as Waypoint from 'react-waypoint';
import { Header, Splash } from './components';
import { AppSection, DashboardSection, PlatformSection, RemoteControlSection } from './sections';
import './App.styl';

interface AppState {
  splashVisible: boolean;
}

class App extends React.Component<{}, AppState> {

  constructor(props) {
    super(props);
    this.state = { splashVisible: true };
  }

  onSplashEnter = evt => {
    this.setState((prevState, props) => ({ splashVisible: true }));
  }

  onSplashLeave = evt => {
    this.setState((prevState, props) => ({ splashVisible: false }));
  }

  render() {
    const { splashVisible } = this.state;
    return (
      <div className='app'>
        <Header pinned={!splashVisible} />
        <Waypoint onEnter={this.onSplashEnter} onLeave={this.onSplashLeave}>
          <div className='splash-container'>
            <Splash />
          </div>
        </Waypoint>
        <main>
          <PlatformSection />
          <AppSection />
          <DashboardSection />
          <RemoteControlSection />
        </main>
      </div>
    );
  }

}

export default App;
