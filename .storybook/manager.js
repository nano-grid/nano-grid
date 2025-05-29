import { addons } from 'storybook/manager-api';
import nanoTheme from './nano-theme';

addons.setConfig({
  theme: nanoTheme,
});