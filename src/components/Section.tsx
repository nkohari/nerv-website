import * as React from 'react';
import * as classNames from 'classnames';
import './Section.styl';

interface SectionProps {
  color?: Color;
  className?: string;
  id?: string;
}

class Section extends React.Component<SectionProps> {

  render() {
    const { className, color, id, children } = this.props;

    const classes = classNames(
      'section',
      color,
      className
    );

    return (
      <section id={id} className={classes}>
        {children}
      </section>
    );
  }

}

export default Section;
