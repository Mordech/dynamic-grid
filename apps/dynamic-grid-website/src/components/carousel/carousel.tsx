import {
  FC,
  MouseEvent,
  ReactNode,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import styled from '@emotion/styled';
import { DynamicGrid, DynamicGridProps } from '@mordech/dynamic-grid-react';

import { Button } from '../button';
import { Icon } from '../icon';

type CarouselProps = {
  children?: ReactNode;
} & DynamicGridProps;

export const CarouselWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  align-self: flex-end;
`;

export const Carousel: FC<CarouselProps> = ({ children, ...rest }) => {
  const [leftArrowDisabled, setLeftArrowDisabled] = useState<boolean>(true);
  const [rightArrowDisabled, setRightArrowDisabled] = useState<boolean>(false);

  const gridRef = useRef<HTMLDivElement>(null);

  const handleArrowsState = useCallback(() => {
    const buffer = 30;
    const grid = gridRef.current;

    if (!grid) return;

    const isAtEnd =
      grid.scrollLeft + grid.offsetWidth >= grid.scrollWidth - buffer;

    const isAtStart = grid.scrollLeft < buffer;

    isAtStart ? setLeftArrowDisabled(true) : setLeftArrowDisabled(false);
    isAtEnd ? setRightArrowDisabled(true) : setRightArrowDisabled(false);
  }, []);

  const handleScroll = useCallback((mouseEvent: MouseEvent) => {
    const grid = gridRef.current;
    if (!grid) return;

    const firstGridChildWidth = grid.firstElementChild?.clientWidth || 200;

    if (!(mouseEvent.target instanceof HTMLElement)) return;
    mouseEvent.target.ariaLabel === 'Next'
      ? grid.scrollBy({ left: firstGridChildWidth })
      : grid.scrollBy({ left: -1 * firstGridChildWidth });
  }, []);

  useLayoutEffect(() => {
    handleArrowsState();

    const resizeObserver = new ResizeObserver(() =>
      requestAnimationFrame(handleArrowsState),
    );
    resizeObserver.observe(gridRef.current!);

    return () => resizeObserver.disconnect();
  }, [handleArrowsState, gridRef.current?.scrollWidth]);

  return (
    <CarouselWrapper>
      <ButtonContainer>
        <Button
          aria-label="Previous"
          radius="round"
          variant="tonal"
          size="compact"
          disabled={leftArrowDisabled}
          onClick={handleScroll}
        >
          <Icon icon="arrow_back" />
        </Button>

        <Button
          aria-label="Next"
          radius="round"
          variant="tonal"
          size="compact"
          disabled={rightArrowDisabled}
          onClick={handleScroll}
        >
          <Icon icon="arrow_forward" />
        </Button>
      </ButtonContainer>

      <DynamicGrid
        ref={gridRef}
        onScroll={() => requestAnimationFrame(handleArrowsState)}
        scrollOptions={{ hideScrollbar: true }}
        {...rest}
        isScroll
      >
        {children}
      </DynamicGrid>

      <ButtonContainer>
        <Button radius="pill" variant="text" size="compact">
          Inspect
          <Icon slot="icon-end" icon="code" />
        </Button>
      </ButtonContainer>
    </CarouselWrapper>
  );
};
