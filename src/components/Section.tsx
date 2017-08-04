import * as React from 'react';
import * as classNames from 'classnames';
import './Section.styl';

interface SectionProps {
  color?: Color;
  className?: string;
}

class Section extends React.Component<SectionProps> {

  render() {
    const { className, color, children } = this.props;

    const classes = classNames(
      'section',
      color,
      className
    );

    return (
      <section className={classes}>
        {children}
      </section>
    );
  }

}

export default Section;
