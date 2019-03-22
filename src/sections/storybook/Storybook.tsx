import React from 'react';
import {Heading, Slide, Text, Image, Layout, Fill, Fit} from 'spectacle';

import MinimalExample from '../../assets/images/carbon.png';
import StorybookIssues from '../../assets/images/issues.png';
import StorybookTests from '../../assets/images/testtypes.png';
import ForksStars from '../../assets/images/likes.png';
import TDDgif from '../../assets/images/storybook-addon-jest.gif';

import * as Regression from './regression/StorybookRegression';

export {
  Regression
};

export class What extends React.Component {
  public render() {
    return (
      <Slide>
        <Heading>
          "Storybook
        </Heading>
        <Text>
          is a development environment for UI components.
          It allows you to browse a component library, view the different states of each component, and interactively develop and test components."
        </Text>
        <Text>git@storybooks/storybook</Text>
      </Slide>
    );
  }
}

export class Simple extends React.Component {
  public render() {
    return (
      <Slide>
        <Heading>
          Simplicity
        </Heading>
        <Text>
          That's what sells
        </Text>
        <Image src={MinimalExample} height={400}/>
      </Slide>
    );
  }
}

export class Unifies extends React.Component {
  public render() {
    return (
      <Slide>
        <Heading>
          Centralizes
        </Heading>
        <Image src={StorybookIssues}/>
        <Image src={ForksStars}/>
      </Slide>
    );
  }
}

export class TestTypes extends React.Component {
  public render() {
    return (
      <Slide>
        <Heading>
          Different test purposes
        </Heading>
        <Image src={StorybookTests}/>
        <Text>
          Actual section in the docs
        </Text>
      </Slide>
    );
  }
}

export class TDD extends React.Component {
  public render() {
    return (
      <Slide>
        <Heading>
          TDD
        </Heading>
        <Text>Test Driven Development</Text>
        <Image src={TDDgif} height={400}/>
      </Slide>
    );
  }
}

export class BDD extends React.Component {
  public render() {
    return (
      <Slide>
        <Heading>
          BDD
        </Heading>
        <Text>Behavior Driven Development</Text>
        <Text>TDD evolved</Text>
        <Layout>
          <Fill>
            <Text>
              Who
            </Text>
            <Text>
              What
            </Text>
            <Text>
              Why
            </Text>
          </Fill>
          <Fill>
            <Text>
              Start
            </Text>
            <Text>
              Events
            </Text>
            <Text>
              Finish
            </Text>
          </Fill>
        </Layout>
      </Slide>
    );
  }
}

export class Easeness extends React.Component {
  public render() {
    return (
      <Slide>
        <Heading>
          Straightforward
        </Heading>
        <Text>
          Skip long setups
        </Text>
        <Text>
          Fast hot reload
        </Text>
      </Slide>
    );
  }
}

export class Views extends React.Component {
  public render() {
    return (
      <Slide>
        <Heading>
          Aspects
        </Heading>
        <Text>
          More than one purpose
        </Text>
      </Slide>
    );
  }
}

export class ShowCase extends React.Component {
  public render() {
    return (
      <Slide>
        <Heading>
          Showcase
        </Heading>
        <Text>
          Pull Requests
        </Text>
        <Text>
          Issues
        </Text>
      </Slide>
    );
  }
}

export class Documentation extends React.Component {
  public render() {
    return (
      <Slide>
        <Heading>
          Live Docs
        </Heading>
      </Slide>
    );
  }
}

export class OnBoarding extends React.Component {
  public render() {
    return (
      <Slide>
        <Heading>
          On Boarding
        </Heading>
        <Text>
          Self guided tours
        </Text>
      </Slide>
    );
  }
}

export class HowToUse extends React.Component {
  public render() {
    return (
      <Slide>
        <Heading>
          Components Usage
        </Heading>
        <Text>
          Playground
        </Text>
        <Text>
          Edge case displaying
        </Text>
      </Slide>
    );
  }
}

export class Contributing extends React.Component {
  public render() {
    return (
      <Slide>
        <Heading>
          Contributions
        </Heading>
        <Text>
          Please, improve componentization
        </Text>
      </Slide>
    );
  }
}

export class EffinAwesome extends React.Component {
  public render() {
    return (
      <Slide>
        <Heading>
          Storybook is...
        </Heading>
        <Text>Effin' awesome</Text>
      </Slide>
    );
  }
}
