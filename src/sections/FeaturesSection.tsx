import * as React from 'react';
import { Feature, Section } from '../components';

class FeaturesSection extends React.Component {

  render() {
    return (
      <Section>
        <Feature color='teal' icon={require('assets/images/features/notifications.svg')}>
          one
        </Feature>
      </Section>
    );
  }

}

export default FeaturesSection;
