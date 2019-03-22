import React from 'react';
import {Heading, Slide, Text, List} from "spectacle";

export class Disclaimer extends React.Component {
  public render() {
    return (
      <Slide>
        <Heading>
          Disclaimer
        </Heading>
        <Text>
          No impartiality
        </Text>
        <Text>
          React
        </Text>
        <Text>
          Typescript
        </Text>
        <Text>
          You've tested before
        </Text>
      </Slide>
    );
  }
}
