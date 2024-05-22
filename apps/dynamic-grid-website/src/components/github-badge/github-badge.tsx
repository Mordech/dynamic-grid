import { AnchorHTMLAttributes, FC } from 'react';

import lerna from '../../../../../lerna.json';
import GithubIcon from '../../icons/github.svg?react';
import { InteractionLayer } from '../interaction-layer';

import { Container, ProjectName, Version } from './styles';

export const GithubBadge: FC<AnchorHTMLAttributes<HTMLAnchorElement>> = (
  props,
) => {
  const { version } = lerna;

  return (
    <Container {...props}>
      <InteractionLayer />
      <ProjectName>
        <GithubIcon />
        Dynamic Grid
      </ProjectName>
      <Version>{version}</Version>
    </Container>
  );
};
