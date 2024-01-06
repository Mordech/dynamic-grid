import { FC } from 'react';

import {
  Container,
  Location,
  Name,
  ProfileImage,
  ProfileInfo,
  ProfileName,
  Testimonial,
} from './styles';
import { type TestimonialCardProps } from './types';

export const TestimonialCard: FC<TestimonialCardProps> = ({
  name,
  location,
  testimonial,
  avatar,
}) => (
  <Container>
    <ProfileInfo>
      <ProfileImage alt="" loading="lazy" src={avatar} />
      <ProfileName>
        <Name>{name}</Name>
        <Location>{location}</Location>
      </ProfileName>
    </ProfileInfo>
    <Testimonial>{testimonial}</Testimonial>
  </Container>
);
