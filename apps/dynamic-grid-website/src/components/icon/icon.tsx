import { type CSSProperties, FC, type HTMLAttributes } from 'react';
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import { type Icons } from '../svg-store';

export type IconProps = {
  icon: Icons;
  size?: CSSProperties['width'];
  color?: string;
} & HTMLAttributes<HTMLOrSVGElement>;

export const SvgElement = styled.svg<{ size: CSSProperties['width'] }>`
  flex-shrink: 0;

  ${({ size }) =>
    size &&
    css`
      width: ${size};
      height: ${size};
    `}
`;

export const Icon: FC<IconProps> = ({
  icon,
  size,
  color = 'currentColor',
  ...rest
}) => (
  <SvgElement size={size} fill={color || 'currentcolor'} {...rest}>
    <use href={`#${icon}`} />
  </SvgElement>
);
