import styled from '@emotion/styled';
import { fontSizes } from '@mordech/tokens';

export const HeadlineContainer = styled.div`
  container: sidebar / inline-size;
  container-name: headline-container;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  max-width: 50rem;
  align-self: stretch;

  & h1 {
    font-size: clamp(${fontSizes[2]}, 9cqi, ${fontSizes[5]});
    line-height: 115%;
  }
`;
