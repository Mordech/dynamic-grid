import { FC } from 'react';

import {
  Container,
  Description,
  Image,
  SubtitleSpan,
  TitleSpan,
} from './styles';
import { type MusicCardProps } from './types';

export const MusicCard: FC<MusicCardProps> = ({ src, variant, cardInfo }) => (
  <Container>
    <Image alt="" loading="lazy" src={src} variant={variant} />
    <Description variant={variant}>
      {variant === 'album' ? (
        <>
          <TitleSpan>{cardInfo.albumName}</TitleSpan>
          <SubtitleSpan>{cardInfo.artist}</SubtitleSpan>
        </>
      ) : (
        <TitleSpan>{cardInfo.artist}</TitleSpan>
      )}
    </Description>
  </Container>
);
