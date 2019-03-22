import React from 'react';
import {Heading, Slide, Text} from 'spectacle';

import Fowler from '../../assets/images/fowler.jpg';

export class What extends React.Component {
  public render() {
    return (
      <Slide>
        <Heading>
          Regression
        </Heading>
        <Text>
          What?
        </Text>
      </Slide>
    );
  }
}

export class MentalHealth extends React.Component {
  public render() {
    return (
      <Slide>
        <Heading>
          Mental Health
        </Heading>
        <Text>
          For developers
        </Text>
        <Text>
          For product managers
        </Text>
        <Text>
          For you
        </Text>
      </Slide>
    );
  }
}

export class Trust extends React.Component {
  public render() {
    return (
      <Slide>
        <Heading>
          Regression is trust
        </Heading>
        <Text>
          in code
        </Text>
        <Text>
          in your colleagues
        </Text>
      </Slide>
    );
  }
}

export class Refactoring extends React.Component {
  public render() {
    return (
      <Slide bgImage={Fowler} bgDarken={0.6}>
        <Heading>
          Refactor
        </Heading>
        <Text>
          Refactor
        </Text>
        <Text>
          Refactor
        </Text>
        <Text>
          Refactor
        </Text>
        <Text>
          Refactor
        </Text>
        <Text>
          Keep doing it
        </Text>
      </Slide>
    );
  }
}

export class ScoutsBoy extends React.Component {
  public render() {
    return (
      <Slide>
        <Heading>
          Scoutsboy Tool
        </Heading>
        <Text>
          Always better
        </Text>
        <Text>
          Always cleaner
        </Text>
      </Slide>
    );
  }
}

export class FrontIsDifferent extends React.Component {
  public render() {
    return (
      <Slide>
        <Heading>
          Frontend is <span style={{ textDecoration: 'underline' }}>not</span> backend
        </Heading>
        <Text>
          Well, <span style={{ textDecoration: 'underline' }}>duh</span>
        </Text>
        <Text>Then visuals</Text>
      </Slide>
    );
  }
}

export class ChangeImpact extends React.Component {
  public render() {
    return (
      <Slide>
        <Heading>
          Changes
        </Heading>
        <Text>
          Clear as day
        </Text>
      </Slide>
    );
  }
}

export class QuickAndAssuredAnalysis extends React.Component {
  public render() {
    return (
      <Slide>
        <Heading>
          WYSIWYG
        </Heading>
        <Text>
          Easy to spot evolution
        </Text>
      </Slide>
    );
  }
}

export class PullRequests extends React.Component {
  public render() {
    return (
      <Slide>
        <Heading>
          Pull Requests
        </Heading>
        <Text>
          Give me more
        </Text>
      </Slide>
    );
  }
}
