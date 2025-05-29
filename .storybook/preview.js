import { themes } from 'storybook/theming';
/** @type { import('@storybook/web-components-vite').Preview } */

const preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },
    docs: {
      theme: themes.dark,
    },
  },
};

export default preview;