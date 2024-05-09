import styled from '@emotion/styled';
import { colors, fontFamilies, fontSizes, fontWeights } from '@mordech/tokens';

export const Container = styled.article`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  border: 1px solid ${colors.outline};
  border-radius: 0.75rem;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 11rem;
  object-fit: cover;
`;

export const Description = styled.div`
  display: flex;
  flex: 1;
  padding: 1rem;
  gap: 0.75rem;
  align-items: center;
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
  align-items: flex-start;
  align-self: stretch;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Title = styled.h3`
  font-size: ${fontSizes[2]};
  font-family: ${fontFamilies.ui};
  font-weight: ${fontWeights.medium};
  color: ${colors.background.onBase};
  line-height: 1.25;
`;

export const Text = styled.p`
  font-size: ${fontSizes[0]};
  font-weight: ${fontWeights.regular};
  color: ${colors.background.onBaseVariant};
`;

export const DiscountContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  border-radius: 0.5rem;
  background-color: ${colors.primary.container};
  color: ${colors.primary.onContainer};
`;

export const DiscountPercentage = styled.span`
  font-size: ${fontSizes[3]};
  font-family: ${fontFamilies.ui};
  font-weight: ${fontWeights.regular};
  line-height: 1;
`;

export const DiscountText = styled.span`
  font-size: ${fontSizes[0]};
  font-weight: ${fontWeights.regular};
`;

export const Details = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1rem;
  border-top: 1px dashed ${colors.outline};
  flex-wrap: wrap;
`;

export const DataPoint = styled.div`
  display: flex;
  align-items: center;
  white-space: nowrap;
  gap: 0.25rem;
  font-size: ${fontSizes[0]};
  color: ${colors.background.onBaseVariant};

  & > svg {
    height: 1.25rem;
    aspect-ratio: 1;
    flex-shrink: 0;
  }

  strong {
    font-weight: ${fontWeights.medium};
  }
`;
