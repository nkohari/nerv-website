import * as React from 'react';
import * as Waypoint from 'react-waypoint';
import * as classNames from 'classnames';
import Svg from './Svg';
import './Splash.styl';

const CIRCUIT_COUNT = 12;
const CIRCUIT_CHANGE_DELAY = 2000;
const chooseBadCircuit = () => Math.floor(Math.random() * CIRCUIT_COUNT); // tslint:disable-line:insecure-random

interface SplashState {
  visible: boolean;
  badCircuit: Number;
}

class Splash extends React.Component<{}, SplashState> {

  timer: any;

  constructor(props) {
    super(props);
    this.state = { visible: false, badCircuit: chooseBadCircuit() };
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
    this.setState((prevState, props) => ({ badCircuit: chooseBadCircuit() }));
  }

  onEnter = evt => {
    this.startAnimating();
    this.setState((prevState, props) => ({ visible: true }));
  }

  onLeave = evt => {
    this.stopAnimating();
    this.setState((prevState, props) => ({ visible: false }));
  }

  render() {
    const { badCircuit, visible } = this.state;

    const circuits = [];
    for (let i = 0; i < CIRCUIT_COUNT; i++) {
      const classes = classNames('circuit', { bad: badCircuit === i });
      circuits.push(<Svg key={i} src={require(`assets/images/splash/circuit${i}.svg`)} className={classes} />); // tslint:disable-line:non-literal-require
    }

    return (
      <Waypoint onEnter={this.onEnter} onLeave={this.onLeave}>
        <div className={classNames('splash', { visible })}>
          <div className='splash-animation'>
            <Svg src={require('assets/images/splash/reticle.svg')} className='reticle' />
            <Svg src={require('assets/images/splash/ring0.svg')} className='ring0' />
            {circuits}
            <Svg src={require('assets/images/splash/ring1.svg')} className='ring1' />
            <Svg src={require('assets/images/splash/ring2.svg')} className='ring2' />
            <Svg src={require('assets/images/splash/wave0.svg')} className='wave wave0' />
            <Svg src={require('assets/images/splash/wave1.svg')} className='wave wave1' />
            <Svg src={require('assets/images/splash/wave2.svg')} className='wave wave2' />
            <Svg src={require('assets/images/splash/wave3.svg')} className='wave wave3' />
            <Svg src={require('assets/images/splash/boxes.svg')} className='boxes' />
            <div className='splash-animation-overlay' />
          </div>
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
        </div>
      </Waypoint>
    );
  }

}

export default Splash;
