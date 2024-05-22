import styled from '@emotion/styled';
import { colors, fontSizes } from '@mordech/tokens';

export const Container = styled.a`
  position: relative;
  cursor: pointer;
  display: flex;
  width: min-content;
  white-space: nowrap;
  border-radius: 0.5rem;
  color: ${colors.primary.onBase};
  line-height: 1;
  font-size: ${fontSizes[0]};
  overflow: hidden;

  svg {
    height: 1.25em;
    width: 1.25em;
  }
`;

export const ProjectName = styled.div`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  padding: 0.25rem;
  background-color: ${colors.primary.base};
  color: ${colors.primary.onBase};
`;

export const Version = styled.div`
  display: flex;
  align-items: center;
  padding-block: 0.25rem;
  padding-inline: 0.25rem 0.5rem;
  background-color: ${colors.background.surface};
  color: ${colors.background.onSurface};
`;
