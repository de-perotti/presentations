import {text, withKnobs} from '@storybook/addon-knobs/react';
import { storiesOf } from '@storybook/react';
import React from 'react';

import {getWindowParam} from '../utils/storybook';
import { Button } from './Button';

const ButtonStories = storiesOf('Components/Button', module);

ButtonStories.addDecorator(withKnobs);

ButtonStories.add('Red Button', () => {
  return (
    <Button
      style={{ backgroundColor: 'red', padding: '10px 25px' }}
    />
  );
});

ButtonStories.add('Blue Button', () => {
  const color = getWindowParam('color') || 'blue';

  return (
    <Button
      style={{ backgroundColor: text('Color', color), padding: '10px 25px' }}
    />
  );
});

ButtonStories.add('Button w/ children', () => (
  <Button style={{ padding: '10px 25px'}}>
    {'Hello World'}
  </Button>));
