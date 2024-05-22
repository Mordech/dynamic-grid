import { FC } from 'react';

import { Container, Description, ImageSpacer } from './styles';
import { FeaturedCardProps } from './types';

export const FeaturedCard: FC<FeaturedCardProps> = ({
  backgroundImage,
  description,
}) => (
  <Container backgroundImage={backgroundImage}>
    <ImageSpacer />
    <Description>{description}</Description>
  </Container>
);
