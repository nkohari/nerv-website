import * as React from 'react';
import * as classNames from 'classnames';
import { Svg } from 'src/components';
import './Header.styl';

interface HeaderProps {
  pinned: boolean;
}

class Header extends React.Component<HeaderProps> {

  render() {
    const { pinned } = this.props;
    return (
      <header className={classNames('header', { pinned })}>
        <a href='#' className='logo'>
          <Svg src={require('assets/images/brain.svg')} className='brain' />
          Nerv
        </a>
        <a href='#'>
          Login
        </a>
        <a href='#' className='signup'>
          Sign Up
        </a>
      </header>
    );
  }

}

export default Header;
