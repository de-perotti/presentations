import { storiesOf } from '@storybook/react';
import React from 'react';
import {Presentation} from './Presentation';

const PresentationStories = storiesOf('Behold', module);

PresentationStories.add(
  'the Presentation',
  () => (
    <Presentation/>
  ),
);
