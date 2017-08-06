import * as React from 'react';
import * as classNames from 'classnames';
import * as Waypoint from 'react-waypoint';
import { Svg } from 'src/components';
import './PlatformDiagram.styl';

interface PlatformDiagramState {
  visible: boolean;
}

class PlatformDiagram extends React.Component<{}, PlatformDiagramState> {

  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  onEnter = event => {
    this.setState((prevState, props) => ({ visible: true }));
  }

  render() {
    const { visible } = this.state;
    const classes = classNames('platform-diagram', { visible });
    return (
      <Waypoint onEnter={this.onEnter}>
        <div>
          <Svg src={require('assets/images/diagrams/platform.svg')} className={classes} />
        </div>
      </Waypoint>
    );
  }

}

export default PlatformDiagram;
