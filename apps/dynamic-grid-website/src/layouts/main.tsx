import styled from '@emotion/styled';
import { breakpoints, colors } from '@mordech/tokens';

export const Main = styled.div`
  background: ${colors.background.base};
  display: flex;
  max-width: 80rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 3rem;
  margin-inline: auto;
  width: 100%;
  border-radius: 1rem;
  padding: 1rem;
  resize: horizontal;
  overflow: hidden;
  ${breakpoints.sm} {
    padding: 2rem;
  }
`;
