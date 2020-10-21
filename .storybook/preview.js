import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { ThemeProvider } from 'styled-components';
import reset from 'styled-reset';
import { GlobalCSS } from '../src/foundation';
import theme from '../src/themes/theme';

// automatically import all files ending in *.stories.js
configure(
  [
    require.context('../src/foundation', true, /\.stories\.(mdx|js)$/),
    require.context('../src/components', true, /\.stories\.(mdx|js)$/),
  ],
  module
);

addDecorator(story => (
  <ThemeProvider theme={theme}>
    <GlobalCSS />
    {story()}
  </ThemeProvider>
));
