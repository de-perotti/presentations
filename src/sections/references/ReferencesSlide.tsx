import React from 'react';
import { Slide, Link, Text } from 'spectacle';

export default class ReferencesSlide extends React.Component {
  public render() {
    return (
      <Slide>
        <Text>
          <Link href="https://github.com/FormidableLabs/spectacle">
            FormidableLabs/spectacle
          </Link>
        </Text>
        <Text>
          <Link href="https://github.com/storybooks/storybook">
            storybooks/storybook
          </Link>
        </Text>
        <Text>
          <Link href="https://github.com/storybooks/storybook/blob/next/ADDONS_SUPPORT.md">
            Stoybook addons and support
          </Link>
        </Text>
        <Text>
          <Link href="https://github.com/facebook/create-react-app">
            facebook/create-react-app
          </Link>
        </Text>
        <Text>
          <Link href="https://facebook.github.io/create-react-app/docs/adding-typescript">
            CRA w/ typescript
          </Link>
        </Text>
      </Slide>
    );
  }
}
