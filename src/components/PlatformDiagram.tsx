import * as React from 'react';
import { Svg } from 'src/components';
import './PlatformDiagram.styl';

class PlatformDiagram extends React.Component {

  render() {
    return <Svg src={require('assets/images/nerv-platform.svg')} className='nerv-platform' />;
  }

}

export default PlatformDiagram;
