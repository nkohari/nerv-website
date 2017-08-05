import * as React from 'react';
import { Row, Column, Section } from '../components';

class SecuritySection extends React.Component {

  render() {
    return (
      <Section>
        <Row>
          <Column xs='8'>
            <h3>Safe and Secure</h3>
            <ol>
              <li>We don't want your wallet information or your private key.</li>
              <li>All traffic to the Nerv API is sent via HTTPS.</li>
              <li>All of our code that runs on your machines is open source.</li>
              <li>Remote control of machines requires multi-factor authentication directly between your web browser and your machine.</li>
              <li>We don't collect any personally-identifiable information from your machines.</li>
            </ol>
          </Column>
        </Row>
      </Section>
    );
  }

}

export default SecuritySection;
