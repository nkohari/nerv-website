import * as React from 'react';
import * as classNames from 'classnames';

interface SvgProps {
  src: React.ComponentClass;
  style?: object;
  className?: string;
}

class Svg extends React.Component<SvgProps> {

  render() {
    const { src, className, style } = this.props;

    const props = {
      className: classNames('svg', className),
      style
    };

    return React.createElement(src, props as any);
  }

}

export default Svg;
