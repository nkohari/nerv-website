import * as React from 'react';
import { Row, Column, Section, Svg } from '../components';

class RemoteControlSection extends React.Component {

  render() {
    return (
      <Section>
        <Row xs='center'>
          <Column type='text' xs='12'>
            <h3>Secure Remote Control</h3>
            <p>
              When you set up the Nerv App on your mining machine, you can provide
              a secret phrase that's known only to you. You can link this secret
              phrase to a TOTP token generator like a Yubikey or an app like Authy
              or Google Authenticator. When you want to execute a command on the
              remote machine, you must provide a TOTP token, which is sent with
              the command and verified by the Nerv App on the mining machine itself.
              Your secret is never entered into or stored on the Nerv servers,
              so even if someone compromised your account or our system, they still
              couldn't remotely control your mining machines.
            </p>
          </Column>
          <Column xs='12'>
            <Svg src={require('assets/images/remote-control.svg')} />
          </Column>
        </Row>
      </Section>
    );
  }

}

export default RemoteControlSection;
