import * as React from 'react';
import * as classNames from 'classnames';
import * as Waypoint from 'react-waypoint';
import { Svg } from 'src/components';
import './RemoteControlDiagram.styl';

interface RemoteControlDiagramState {
  visible: boolean;
}

class RemoteControlDiagram extends React.Component<{}, RemoteControlDiagramState> {

  constructor(props) {
    super(props);
    this.state = { visible: false };
  }

  onEnter = event => {
    this.setState((prevState, props) => ({ visible: true }));
  }

  render() {
    const { visible } = this.state;
    const classes = classNames('remote-control-diagram', { visible });
    return (
      <Waypoint onEnter={this.onEnter}>
        <div>
          <Svg src={require('assets/images/diagrams/remote-control.svg')} className={classes} />
        </div>
      </Waypoint>
    );
  }

}

export default RemoteControlDiagram;
