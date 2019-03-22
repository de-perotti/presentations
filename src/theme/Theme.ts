import _ from 'lodash';
import createTheme from 'spectacle/lib/themes/default';

import themeJson from './theme.json';

const colors = {
  primary: '#2f4f4f',
  secondary: '#95a777',
  tertiary: '#ffffff',
  quaternary: '#ffefd5',
};

const defaultFont = {
  name: 'PT Mono',
  googleFont: true,
  styles: ['400'],
};

const fonts = {
  primary: defaultFont,
  secondary: defaultFont,
  tertiary: defaultFont,
};

function getTheme() {
  const theme = _.merge(createTheme(colors, fonts), themeJson);

  _.set(theme, 'screen.progress.bar.container.height', '5px');

  return theme;
}

export const Theme = getTheme();
