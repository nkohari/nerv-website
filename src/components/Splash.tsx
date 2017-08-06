import * as React from 'react';
import * as Waypoint from 'react-waypoint';
import * as classNames from 'classnames';
import * as scrollIntoView from 'scroll-into-view';
import Svg from './Svg';
import './Splash.styl';

const CIRCUIT_COUNT = 12;
const CIRCUIT_CHANGE_DELAY = 2000;
const chooseRedCircuit = () => Math.floor(Math.random() * CIRCUIT_COUNT); // tslint:disable-line:insecure-random

interface SplashState {
  visible: boolean;
  redCircuit: number;
}

class Splash extends React.Component<{}, SplashState> {

  timer: any;

  constructor(props) {
    super(props);
    this.state = { visible: false, redCircuit: chooseRedCircuit() };
  }

  componentWillUnmount() {
    this.stopAnimating();
  }

  startAnimating() {
    this.timer = setInterval(this.onIntervalTick, CIRCUIT_CHANGE_DELAY);
  }

  stopAnimating() {
    if (this.timer) clearInterval(this.timer);
  }

  onIntervalTick = () => {
    this.setState((prevState, props) => ({ redCircuit: chooseRedCircuit() }));
  }

  onEnter = evt => {
    this.startAnimating();
    this.setState((prevState, props) => ({ visible: true }));
  }

  onLeave = evt => {
    this.stopAnimating();
    this.setState((prevState, props) => ({ visible: false }));
  }

  onLinkClicked = evt => {
    const el = document.getElementsByTagName('main')[0];
    scrollIntoView(el);
  }

  render() {
    const { redCircuit, visible } = this.state;
    return (
      <Waypoint onEnter={this.onEnter} onLeave={this.onLeave}>
        <div className={classNames('splash', `circuit-${redCircuit}-red`, { visible })}>
          <Svg src={require('assets/images/splash.svg')} className='splash-image' />
          <div className='splash-animation-overlay' />
          <div className='splash-text'>
            <h1>Nerv</h1>
            <a onClick={this.onLinkClicked}>
              <h2>
                Monitor and manage<br/>
                your crypto mining operation<br/>
                from anywhere in the world<br/>
                <div className='arrow'>▼</div>
              </h2>
            </a>
          </div>
        </div>
      </Waypoint>
    );
  }

}

export default Splash;
