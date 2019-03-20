import createTheme from 'spectacle/lib/themes/default';

const colors = {
  primary: '#2f4f4f',
  secondary: '#95a777',
  tertiary: '#ffffff',
  quaternary: '#ffefd5',
};

const defaultFont = {
  name: 'PT Mono',
  googleFont: true,
  styles: ['400']
};

const fonts = {
  primary: defaultFont,
  secondary: defaultFont,
  tertiary: defaultFont,
};

export default createTheme(colors, fonts);
