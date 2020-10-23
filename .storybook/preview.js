import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import { GlobalCSS, theme } from '../src/island-ui';

// automatically import all files ending in *.stories.js
configure(
  [
    require.context('../stories/foundation', true, /\.stories\.(mdx|js)$/),
    require.context('../stories/components', true, /\.stories\.(mdx|js)$/),
  ],
  module
);

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <GlobalCSS />
    {story()}
  </ThemeProvider>
));
