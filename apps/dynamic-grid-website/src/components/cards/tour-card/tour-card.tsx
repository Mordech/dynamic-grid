import { FC } from 'react';

import { Icon } from '../../icon';

import {
  Container,
  Content,
  DataPoint,
  Description,
  Details,
  DiscountContainer,
  DiscountPercentage,
  DiscountText,
  Image,
  Text,
  Title,
} from './styles';
import { difficultyIcon, TourCardProps } from './types';

export const TourCard: FC<TourCardProps> = ({
  title,
  description,
  image,
  discount,
  rating,
  duration,
  difficulty,
}) => (
  <Container>
    <Image src={image} alt="Tour" />
    <Description>
      <Content>
        <Title>{title}</Title>
        <Text>{description}</Text>
      </Content>
      {discount && discount > 0 && (
        <DiscountContainer>
          <DiscountPercentage>{discount}%</DiscountPercentage>
          <DiscountText>discount</DiscountText>
        </DiscountContainer>
      )}
    </Description>
    <Details>
      <DataPoint>
        <Icon icon="sound_detection_dog_barking" />
        <span>
          <strong>{rating}</strong>/5 doggos
        </span>
      </DataPoint>
      <DataPoint>
        <Icon icon="distance" />
        <span>{duration}</span>
      </DataPoint>
      <DataPoint>
        <Icon icon={difficultyIcon[difficulty]} />
        <span>{difficulty}</span>
      </DataPoint>
    </Details>
  </Container>
);
