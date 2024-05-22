import { css, Global } from '@emotion/react';
import { breakpoints } from '@mordech/tokens';

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
        background-color: var(--mrd-color-background-surface);
        padding: 1rem;

        ${breakpoints.sm} {
          padding: 2rem;
        }
      }

      strong {
        font-weight: var(--mrd-font-weight-bold, 700);
      }
    `}
  />
);
