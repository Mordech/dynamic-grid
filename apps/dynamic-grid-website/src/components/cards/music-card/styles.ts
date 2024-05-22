import styled from '@emotion/styled';
import { colors, fontSizes, fontWeights } from '@mordech/tokens';

import { ImageProps, MusicCardVariants } from './types';

export const Image = styled.img<ImageProps>`
  aspect-ratio: 1;
  width: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: ${({ variant }) => (variant === 'album' ? '0.75rem' : '50%')};
`;

export const TitleSpan = styled.span`
  color: ${colors.background.onBase};
  font-size: ${fontSizes[1]};
  font-weight: ${fontWeights.medium};
`;

export const SubtitleSpan = styled.span`
  color: ${colors.background.onBaseVariant};
  font-size: ${fontSizes[0]};
  font-weight: ${fontWeights.regular};
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  gap: 0.75rem;
`;

export const Description = styled.div<{ variant: MusicCardVariants }>`
  display: flex;
  flex-direction: column;
  text-align: ${({ variant }) => (variant === 'album' ? 'start' : 'center')};
`;
