import * as React from 'react';
import * as classNames from 'classnames';

const SIZES = ['xs', 'sm', 'lg', 'xl'];

interface RowProps {
  xs?: string;
  sm?: string;
  lg?: string;
  xl?: string;
  className?: string;
}

class Row extends React.Component<RowProps> {

  getClassesForSize(size) {
    const value = this.props[size];
    if (!value) return undefined;
    return value.split(' ').map(item => `${item}-${size}`);
  }

  render() {
    const { className, children } = this.props;

    const classes = classNames(
      'row',
      className,
      SIZES.map(size => this.getClassesForSize(size))
    );

    return (
      <div className={classes}>
        {children}
      </div>
    );
  }

}

export default Row;
