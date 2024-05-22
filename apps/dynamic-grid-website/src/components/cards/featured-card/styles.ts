import { CSSProperties } from 'react';
import styled from '@emotion/styled';
import { colors, fontSizes, fontWeights } from '@mordech/tokens';

export const Container = styled.div<{
  backgroundImage: CSSProperties['backgroundImage'];
}>`
  display: flex;
  overflow: hidden;
  flex-direction: column;
  background-image: ${({ backgroundImage }) => backgroundImage};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 0.75rem;
`;

export const ImageSpacer = styled.div`
  height: 18rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Description = styled.p`
  display: flex;
  flex: 1;
  flex-direction: column;
  place-content: center;
  background-color: ${colors.background.overlay};
  backdrop-filter: blur(20px);
  padding: 0.75rem;
  min-height: 4rem;
  font-size: ${fontSizes[0]};
  font-weight: ${fontWeights.bold};
  text-align: center;
`;
