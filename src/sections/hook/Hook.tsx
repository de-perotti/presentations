import React from "react";
import {Heading, List, ListItem, Notes, Slide, Text} from "spectacle";
import UncleBobMartin from "../../assets/images/UncleBobMartin.jpg";

export class Important extends React.Component {
  public render() {
    return (
      <Slide bgDarken={0.6} bgImage={UncleBobMartin}>
        <Heading>
          Are tests important?
        </Heading>
        <Text>
          "Yeah boi" - MARTIN, Uncle Bob
        </Text>
        <Notes>
          <List>
            <ListItem>He wrote Clean Code</ListItem>
          </List>
        </Notes>
      </Slide>
    );
  }
}

export class Easy extends React.Component {
  public render() {
    return (
      <Slide>
        <Heading>
          Tests should be easy
        </Heading>
        <Text>
          "How do I mock this other half of the app to test a single bloody function?"
        </Text>
        <Text>
          -
        </Text>
        <Text>
          EVER, Every new person in the team
        </Text>
      </Slide>
    );
  }
}

export class LifeStyle extends React.Component {
  public render() {
    return (
      <Slide>
        <Heading>
          Test often
        </Heading>
        <Text>It should be a part of a developer's day to day life</Text>
      </Slide>
    );
  }
}

export class NotEverything extends React.Component {
  public render() {
    return (
      <Slide>
        <Heading>
          Overtesting
        </Heading>
        <Text>
          Don't do it though
        </Text>
      </Slide>
    );
  }
}

export class TestTrust extends React.Component {
  public render() {
    return (
      <Slide>
        <Heading>
          Tests are currency
        </Heading>
        <Text>
          The only way to afford trust in code
        </Text>
      </Slide>
    );
  }
}
