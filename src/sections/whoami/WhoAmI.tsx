import React from 'react';
import { Slide, Text, Heading, Code, Image, Fit } from 'spectacle';

import LuigiPerotti from '../../assets/images/luigi-perotti.jpg';

export default class WhoAmI extends React.Component {
  public render() {
    return (
      <Slide>
        <Heading>
          <Code>$ whoami</Code>
        </Heading>

        <Fit>
          <Image src={LuigiPerotti} height={100} />
        </Fit>
        <Text>Luigi Perotti</Text>
        <Text>Desenvolvedor</Text>
        <Text>Quero Educação - 6 meses</Text>
        <Text>...e contando</Text>
      </Slide>
    );
  }
}
