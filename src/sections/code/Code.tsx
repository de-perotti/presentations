import React from 'react';
import {Code, Slide, Text} from "spectacle";

export class StorybookIntermission extends React.Component<{ where: string }> {
  public render() {
    const { where, ...props } = this.props;

    return (
      <Slide {...props}>
        <Code>$ storybook</Code>
        <Text>> {where}</Text>
      </Slide>
    );
  }
}

export class RegressionIntermission extends React.Component {
  public render() {
    return (
      <Slide>
        <Code>$ regression</Code>
      </Slide>
    );
  }
}
