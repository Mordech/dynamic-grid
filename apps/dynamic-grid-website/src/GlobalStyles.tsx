import { css, Global } from '@emotion/react';

import '@mordech/tokens/css/fonts/ui.css';
import '@mordech/tokens/css/reset.css';
import '@mordech/tokens/css/tokens.css';

export const GlobalStyles = () => (
  <Global
    styles={css`
      body {
        font-family: var(--mrd-font-family-ui);
        font-size: var(--mrd-font-size-1);
        color: var(--mrd-color-background-on-base);
        background-color: var(--mrd-color-background-base);
      }
    `}
  />
);
