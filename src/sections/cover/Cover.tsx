import React from 'react';
import { Heading, Slide, Text } from "spectacle";

export class Cover extends React.Component {
  public render() {
    return (
      <Slide>
        <Heading>
          Storybook
        </Heading>
        <Text>
          regression in the frontend
        </Text>
      </Slide>
    );
  }
}
