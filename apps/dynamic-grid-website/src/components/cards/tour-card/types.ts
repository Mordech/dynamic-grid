import { Icons } from '../../svg-store';

export interface TourCardProps {
  title: string;
  description: string;
  image: string;
  discount?: number;
  rating: number;
  duration: string;
  difficulty: 'easy' | 'medium' | 'difficult';
}

export const difficultyIcon: Record<string, Icons> = {
  easy: 'directions_run',
  medium: 'hiking',
  difficult: 'military_tech',
};
