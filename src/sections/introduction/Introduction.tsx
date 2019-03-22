import React from 'react';
import { Slide, Text, Heading } from "spectacle";

export class Introduction extends React.Component {
  public render() {
    return (
      <Slide>
        <Heading>
          In this talk
        </Heading>
        <Text>
          Storybook is OP
        </Text>
        <Text>
          Testing is OP
        </Text>
        <Text>
          Storybook is really OP
        </Text>
      </Slide>
    );
  }
}
