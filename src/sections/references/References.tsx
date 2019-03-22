import React from "react";
import { Heading, Link, Slide, Text } from "spectacle";

export class Git extends React.Component {
  public render() {
    return (
      <Slide>
        <Heading>
          Git Repos
        </Heading>
        <Text>
          <Link href="https://github.com/FormidableLabs/spectacle">
            git@FormidableLabs/spectacle
          </Link>
        </Text>
        <Text>
          <Link href="https://github.com/storybooks/storybook">
            git@storybooks/storybook
          </Link>
        </Text>
        <Text>
          <Link href="https://github.com/facebook/create-react-app">
            git@facebook/create-react-app
          </Link>
        </Text>
      </Slide>
    );
  }
}

export class ArtsAndDocs extends React.Component {
  public render() {
    return (
      <Slide>
        <Heading>
          Docs and Articles
        </Heading>
        <Text>
          <Link href="https://github.com/storybooks/storybook/blob/next/ADDONS_SUPPORT.md">
            Stoybook addons and support
          </Link>
        </Text>
        <Text>
          <Link href="https://facebook.github.io/create-react-app/docs/adding-typescript">
            CRA w/ typescript
          </Link>
        </Text>
        <Text>
          <Link href="https://storybook.js.org/docs/testing/automated-visual-testing/#libraries-and-services-with-storybook-integration">
            Libs and Services w/ Storybook Integration
          </Link>
        </Text>
        <Text>
          <Link href="https://medium.com/kadira-voice/snapshot-testing-in-react-storybook-43b3b71cec4f">
            Snapshot Testing in React Storybook
          </Link>
        </Text>
      </Slide>
    );
  }
}

export class Me extends React.Component {
  public render() {
    return (
      <Slide>
        <Heading>
          Social
        </Heading>
        <Text>
          @perottilds
        </Text>
        <Text>
          <Link href="https://github.com/perottilds">
            github
          </Link>
        </Text>
        <Text>
          <Link href="https://linkedin.com/in/perottilds">
            linkedin
          </Link>
        </Text>
        <Text textSize="1.5rem" margin={20}>
          battlenet: perotti#11407
        </Text>
      </Slide>
    );
  }
}
