import styled from '@emotion/styled';
import { colors, transitions } from '@mordech/tokens';

export const InteractionLayer = styled.div`
  &:focus-visible {
    outline: ${colors.primary.base} solid 2px;
    transition: outline ${transitions.bounce};
    outline-offset: 4px;
  }

  &:disabled {
    --mrd-button-hover-overlay-color: transparent;
  }

  &::after {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: inherit;
    background-color: var(--mrd-button-hover-overlay-color, currentColor);
    transition: opacity ${transitions.bounce};
    opacity: var(--mrd-button-hover-overlay-opacity, 0);
  }

  &:hover::after {
    opacity: 0.08;
  }

  &:active::after {
    opacity: 0.12;
  }
`;
