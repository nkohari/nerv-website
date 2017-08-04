import * as React from 'react';
import * as classNames from 'classnames';

interface SvgProps {
  src: React.ComponentClass;
  className?: string;
}

class Svg extends React.Component<SvgProps> {

  static defaultProps = {
    size: 'standard'
  };

  render() {
    const { src, className } = this.props;

    const props = {
      className: classNames('svg', className)
    };

    return React.createElement(src, props as any);
  }

}

export default Svg;
