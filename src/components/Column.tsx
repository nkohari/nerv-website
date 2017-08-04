import * as React from 'react';
import * as classNames from 'classnames';
import './Column.styl';

const SIZES = ['xs', 'sm', 'lg', 'xl'];

interface ColumnProps {
  xs?: string;
  sm?: string;
  lg?: string;
  xl?: string;
  className?: string;
  type?: string;
  flex?: boolean;
}

class Column extends React.Component<ColumnProps> {

  getClassesForSize(size) {
    const value = this.props[size];
    if (!value) return undefined;
    return value.split(' ').map(item => (item === 'auto') ? `col-${size}` : `col-${size}-${item}`);
  }

  render() {
    const { className, flex, type, children } = this.props;

    const classes = classNames(
      'col',
      type && `col-${type}`,
      flex && 'col-flex',
      SIZES.map(size => this.getClassesForSize(size)),
      className
    );

    return (
      <div className={classes}>
        {children}
      </div>
    );
  }

}

export default Column;
