import React from 'react';
import { Deck as ADeck, DeckProps } from 'spectacle';
import { Theme } from '../theme/Theme';

export const Deck = React.memo((props: DeckProps & JSX.ElementChildrenAttribute) =>
  <ADeck
    {...props}
    theme={Theme}
    transition={['slide', 'zoom']}
    progress='bar'
  />,
);
