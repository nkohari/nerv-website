import * as React from 'react';
import * as classNames from 'classnames';
import { Svg } from 'src/components';
import './Feature.styl';

interface FeatureProps {
  className?: string;
  color: string;
  icon: React.ComponentClass;
}

class Feature extends React.Component<FeatureProps> {

  render() {
    const { className, color, icon, children } = this.props;
    return (
      <div className={classNames('feature', className)}>
        <div className={classNames('feature-icon', color)}>
          <Svg src={icon} />
        </div>
        <div className='feature-content'>
          {children}
        </div>
      </div>
    );
  }

}

export default Feature;
