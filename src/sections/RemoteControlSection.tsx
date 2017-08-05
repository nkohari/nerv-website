import * as React from 'react';
import { Row, Column, Section, RemoteControlDiagram } from '../components';

class RemoteControlSection extends React.Component {

  render() {
    return (
      <Section>
        <Row xs='center'>
          <Column xs='10'>
            <h3>Secure Remote Control</h3>
            <p>
              When you set up the Nerv App on your mining machine, you can link it
              to a TOTP token generator like a Yubikey or an app like Authy or
              Google Authenticator. To execute a remote command on the mining machine,
              you must provide a TOTP token, which is sent with the command and verified
              by the Nerv App on the mining machine itself. The Nerv servers aren't
              in charge of verifying your TOTP token, so even if your account is
              compromised, your machines can't be remotely controlled by anyone else.
            </p>
          </Column>
          <Column xs='12'>
            <RemoteControlDiagram />
          </Column>
        </Row>
      </Section>
    );
  }

}

export default RemoteControlSection;
