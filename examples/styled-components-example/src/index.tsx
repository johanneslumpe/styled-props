import { em, px } from '@johanneslumpe/css-types';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ThemeProvider } from 'styled-components';

import { Button } from './layoutComponents';
import { theme } from './theme';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <div>
      <Button
        variant={{ base: 'primary', medium: 'secondary' }}
        padding={{ base: px(10), medium: px(15), large: [px(20), em(5)] }}
      >
        A button with styled-props!
      </Button>
    </div>
  </ThemeProvider>,
  document.getElementById('app'),
);
