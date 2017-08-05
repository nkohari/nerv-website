import * as React from 'react';
import { Row, Column, Section } from '../components';

class AppSection extends React.Component {

  render() {
    return (
      <Section color='blue'>
        <Row>
          <Column xs='6'>
            <h3>Nerv App</h3>
            <p>
              The Nerv app is a GUI that manages the mining software you're already using.
              It helps you configure everything, then monitors the software as its running,
              along with the hardware doing the work. Your hashrate, as well as device metrics
              like temperature and clock speed, are all sent to the Nerv API.
            </p>
            <p>
              The Nerv app is free to use, whether you have a Nerv subscription or not. It's
              also available as open source under the Mozilla Public License, so you can see
              exactly what's running on your machines.
            </p>
          </Column>
        </Row>
      </Section>
    );
  }

}

export default AppSection;
