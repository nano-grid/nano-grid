import { create } from 'storybook/theming';
 
export default create({
  base: 'dark',
  brandTitle: 'Nano Grid',
  brandUrl: 'https://nano-grid.github.io',
  brandImage: 'img/nano-ext.svg',
  brandTarget: '_self',

   // Typography
  fontBase: 'Montserrat, Helvetica, Arial, sans-serif',
  fontCode: 'monospace',
 
  // colorPrimary: '#f0a',
  colorSecondary: '#88e2b4',
 
  // UI
  appBg: 'hsl(240deg 14% 16%)',
  appContentBg: 'hsl(218 22% 13% / 1)',
  appPreviewBg: '#202028',
  appBorderColor: '#454545',
  appBorderRadius: 4,
 
  // Text colors
  textColor: '#eeeeee',
  // textInverseColor: '#f0a',
 
  // Toolbar default and active colors
  barTextColor: '#9E9E9E',
  barSelectedColor: 'rgb(80 165 122)',
  barHoverColor: '#88e2b4',
  barBg: 'hsl(240deg 14% 15%)',
 
  // Form colors
  inputBg: 'hsl(219deg 24% 23%)',
  inputBorder: 'hsl(219deg 24% 24%)',
  inputTextColor: '#eee',
  inputBorderRadius: 2,
});