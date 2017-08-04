import * as React from 'react';
import { Column, Row, Section, PlatformDiagram } from '../components';

class OverviewSection extends React.Component {

  render() {
    return (
      <Section color='blue-grey'>
        <Row xs='center middle' xl='start'>
          <Column type='text' xs='12' xl='4'>
            <h3>The Nerv Platform</h3>
            <p>
              Nerv is a cloud platform that allows cryptocurrency miners to remotely monitor
              and manage their mining operation. Whether you're running one rig or one thousand,
              Nerv lets you make sure everything is working well, and gives you insight into
              how much you're making.
            </p>
          </Column>
          <Column flex xs='12' xl='8'>
            <PlatformDiagram />
          </Column>
        </Row>
      </Section>
    );
  }

}

export default OverviewSection;
