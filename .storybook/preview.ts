import type { Preview } from "@storybook/react";
import '../src/assets/styles/globals.scss';
import '../src/assets/styles/variables.scss';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },

  tags: ['autodocs']
};

export default preview;
