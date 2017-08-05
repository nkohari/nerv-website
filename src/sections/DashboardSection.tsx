import * as React from 'react';
import { Row, Column, Section } from '../components';

class DashboardSection extends React.Component {

  render() {
    return (
      <Section color='deep-purple'>
        <Row>
          <Column xs='6'>
            <h3>The Nerv Dashboard</h3>
            <p>
              From the Nerv dashboard, you can see a real-time view of all of the metrics
              being collected from all of your mining machines. Nerv takes minute-by-minute
              samples of this information and stores them, so you can see how your operation
              is performing over time.
            </p>
            <p>
              Crypto mining pushes hardware to its limit, and sometimes systems are unstable.
              Gone unnoticed, this can cost you money &mdash; or worse, can damage your system.
              Using the Nerv dashboard, you can set up alerts to be sent via email or SMS when
              your hashrate dips too low or your temperature climbs too high. Crank your overclock
              as hard as you want, and Nerv will let you know if anything goes wrong.
            </p>
          </Column>
        </Row>
      </Section>
    );
  }

}

export default DashboardSection;
