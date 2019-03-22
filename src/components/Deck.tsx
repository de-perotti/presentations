import { Theme } from "../theme/Theme";
import { Deck as ADeck, DeckProps } from "spectacle";
import React from "react";

export const Deck = React.memo((props: DeckProps & JSX.ElementChildrenAttribute) =>
  <ADeck
    {...props}
    theme={Theme}
    transition={['slide', 'zoom']}
    progress="bar"
  />
);
