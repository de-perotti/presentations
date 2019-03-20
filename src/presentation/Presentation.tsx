import React from 'react';
import { Deck } from 'spectacle';

import Introduction from '../sections/introduction';
import Hook from '../sections/hook';
import Disclaimer from '../sections/disclaimer';
import AutomatedTests from '../sections/automated';
import Storybook from '../sections/storybook';
import Regression from '../sections/regression';
import Conclusion from '../sections/conclusion';
import ReferencesSlide from '../sections/references';
import WhoAmI from '../sections/whoami';
import Cover from '../sections/cover';

import theme from '../theme';

export default class Presentation extends React.Component {
  public render() {
    return (
      <Deck
        theme={theme}
        transition={['zoom']}
        progress="bar"
      >
        <Cover />
        <Introduction />
        <Hook />
        <Disclaimer />
        <WhoAmI />
        <AutomatedTests />
        <Storybook />
        <Regression />
        <Conclusion />
        <ReferencesSlide />
      </Deck>
    );
  }
}
