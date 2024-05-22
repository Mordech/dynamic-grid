export type MusicCardVariants = 'album' | 'artist';

export interface ImageProps {
  src: string;
  variant: MusicCardVariants;
}

export interface AlbumCardProps {
  variant: 'album';
  cardInfo: {
    albumName: string;
    artist: string;
  };
}

export interface ArtistCardProps {
  variant: 'artist';
  cardInfo: {
    artist: string;
  };
}

export type MusicCardProps = ImageProps & (AlbumCardProps | ArtistCardProps);
