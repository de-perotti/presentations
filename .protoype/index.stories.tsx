import React from 'react';

import { storiesOf } from '@storybook/react';

import Presentation from '../src/presentation/Presentation';

storiesOf('Behold', module)
  .add('the Presentation', () => <Presentation />);
