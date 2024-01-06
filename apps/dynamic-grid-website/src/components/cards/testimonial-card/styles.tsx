import styled from '@emotion/styled';
import { colors, fontSizes, fontWeights } from '@mordech/tokens';

export const Container = styled.div`
  display: flex;
  font-size: ${fontSizes[0]};
  flex-direction: column;
  padding: 1rem;
  gap: 1rem;
`;

export const ProfileInfo = styled.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
  justify-content: flex-start;
`;

export const ProfileImage = styled.img`
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
`;

export const ProfileName = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Name = styled.div`
  font-weight: ${fontWeights.bold};
`;

export const Location = styled.div`
  color: ${colors.background.onBaseVariant};
`;

export const Testimonial = styled.div`
  text-align: start;
`;
