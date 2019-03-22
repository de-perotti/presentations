import React from "react";
import {Heading, Image, Slide, Text } from "spectacle";

import BugsBunny from "../../assets/images/bugsbunny.png";
import Diff from "../../assets/images/diff.png";
import Snap from "../../assets/images/snap.png";

export class Diffs extends React.Component {
  public render() {
    return (
      <Slide>
        <Heading>
          But how different?
        </Heading>
      </Slide>
    );
  }
}

export class Snapshots extends React.Component {
  public render() {
    return (
      <Slide bgImage={Snap} bgDarken={0.6}>
        <Heading>
          Oh Snap!
        </Heading>
      </Slide>
    );
  }
}

export class Tolerances extends React.Component {
  public render() {
    return (
      <Slide bgImage={Diff} bgDarken={0.6}>
        <Heading>
          Caveats
        </Heading>
      </Slide>
    );
  }
}

export class Dockerize extends React.Component {
  public render() {
    return (
      <Slide bgImage={BugsBunny} bgDarken={0.6}>
        <Heading>
          Sup, Dock!
        </Heading>
        <Text>
          ...er to the rescue!
        </Text>
      </Slide>
    );
  }
}
