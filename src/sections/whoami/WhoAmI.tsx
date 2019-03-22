import React from 'react';
import { Appear, Code, Heading, Slide, Text } from 'spectacle';

import LuigiPerotti from '../../assets/images/luigi-perotti.jpg';

export class WhoAmI extends React.Component {
  public render() {
    return (
      <Slide bgImage={LuigiPerotti} bgDarken={0.6}>
        <Heading>
          <Code>$ whoami</Code>
        </Heading>
        <Text>Luigi Perotti</Text>
        <Text>Developer</Text>
        <Text>A try-hard</Text>
      </Slide>
    );
  }
}
