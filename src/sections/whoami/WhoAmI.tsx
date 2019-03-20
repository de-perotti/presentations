import React from 'react';
import { Slide, Text, Heading, Code, Appear } from 'spectacle';

import LuigiPerotti from '../../assets/images/luigi-perotti.jpg';

export default class WhoAmI extends React.Component {
  public render() {
    return (
      <Slide bgImage={LuigiPerotti} bgDarken={0.8}>
        <Heading>
          <Code textColor="#fff">$ whoami</Code>
        </Heading>
        <Text textColor="#fff">Luigi Perotti</Text>
        <Appear order={0}>
          <Text textColor="#fff">Desenvolvedor</Text>
        </Appear>
        <Appear order={1}>
          <Text textColor="#fff">Quero Educação - 6 meses</Text>
        </Appear>
        <Appear order={2}>
          <Text textColor="#fff">...e contando</Text>
        </Appear>
      </Slide>
    );
  }
}
