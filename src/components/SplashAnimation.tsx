import * as React from 'react';
import * as classNames from 'classnames';
import Svg from './Svg';
import './SplashAnimation.styl';

const CIRCUIT_COUNT = 12;
const CIRCUIT_CHANGE_DELAY = 2000;
const chooseBadCircuit = () => Math.floor(Math.random() * CIRCUIT_COUNT); // tslint:disable-line:insecure-random

interface SplashAnimationState {
  badCircuit: Number;
}

class SplashAnimation extends React.Component<{}, SplashAnimationState> {

  timer: any;

  constructor(props) {
    super(props);
    this.state = { badCircuit: chooseBadCircuit() };
  }

  componentDidMount() {
    this.timer = setInterval(this.changeBadCircuit, CIRCUIT_CHANGE_DELAY);
  }

  componentWillUnmount() {
    if (this.timer) clearInterval(this.timer);
  }

  changeBadCircuit = () => {
    this.setState((prevState, props) => ({
      badCircuit: chooseBadCircuit()
    }));
  }

  render() {
    const { badCircuit } = this.state;

    const circuits = [];
    for (let i = 0; i < CIRCUIT_COUNT; i++) {
      const classes = classNames('circuit', { bad: badCircuit === i });
      circuits.push(<Svg key={i} src={require(`assets/images/circuit${i}.svg`)} className={classes} />); // tslint:disable-line:non-literal-require
    }

    return (
      <div className='splash-animation'>
        <Svg src={require('assets/images/reticle.svg')} className='reticle' />
        <Svg src={require('assets/images/ring0.svg')} className='ring0' />
        {circuits}
        <Svg src={require('assets/images/ring1.svg')} className='ring1' />
        <Svg src={require('assets/images/ring2.svg')} className='ring2' />
        <Svg src={require('assets/images/wave0.svg')} className='wave wave0' />
        <Svg src={require('assets/images/wave1.svg')} className='wave wave1' />
        <Svg src={require('assets/images/wave2.svg')} className='wave wave2' />
        <Svg src={require('assets/images/wave3.svg')} className='wave wave3' />
        <Svg src={require('assets/images/boxes.svg')} className='boxes' />
      </div>
    );
  }

}

export default SplashAnimation;
