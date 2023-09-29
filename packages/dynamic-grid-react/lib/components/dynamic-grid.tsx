import React, {
  CSSProperties,
  forwardRef,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { mergeRefs } from 'react-merge-refs';
import { calcColumns, convertUnit } from '@mordech/dynamic-grid-core/lib';
import classnames from 'classnames';

import styles from '@mordech/dynamic-grid-core/lib/core.module.scss';

export interface ScrollProps {
  hint?: number;
  hideScrollbar?: boolean;
  rows?: number;
  scrollSnapAlign?: 'start' | 'center' | 'end' | 'none';
}

export type DynamicGridProps = {
  minColumnWidth: string;
  gridType?: 'auto-fill' | 'auto-fit';
  gap?: string;
  maxColumns?: number;
  dividedBy?: number;
  scrollOptions?: ScrollProps;
  isScroll?: boolean;
} & React.HTMLAttributes<HTMLDivElement>;

export const DynamicGrid = forwardRef(
  (
    {
      children,
      minColumnWidth,
      gridType = 'auto-fill',
      gap,
      maxColumns,
      isScroll,
      scrollOptions,
      dividedBy,
      ...rest
    }: DynamicGridProps,
    ref,
  ) => {
    const [columns, setColumns] = useState<number>(NaN);

    const gridRef = useRef<HTMLDivElement>(null);

    const mergedRef = mergeRefs([gridRef, ref]);

    const getColumns = useCallback(
      () =>
        calcColumns({
          minWidth: convertUnit(minColumnWidth, 'px'),
          elementWidth: gridRef.current?.clientWidth || 0,
          gap: gap ? convertUnit(gap, 'px') : undefined,
          dividedBy,
          maxColumns,
          scrollHint: scrollOptions?.hint,
        }),
      [minColumnWidth, gap, maxColumns, dividedBy, scrollOptions?.hint],
    );

    useLayoutEffect(() => {
      const handleResize = () => {
        if (maxColumns || dividedBy || isScroll || scrollOptions) {
          setColumns(getColumns);
        }
      };

      const resizeObserver = new ResizeObserver(handleResize);

      resizeObserver.observe(gridRef.current!);

      return () => {
        resizeObserver.disconnect();
      };
    }, [dividedBy, getColumns, isScroll, maxColumns, scrollOptions]);

    const styleMap = {
      '--dg-repeat-count': columns || gridType,
      '--dg-min-width': minColumnWidth,
      '--dg-gap': gap,
      '--dg-scroll-hint': scrollOptions?.hint,
      '--dg-scroll-snap-align': scrollOptions?.scrollSnapAlign,
      '--dg-scroll-rows': scrollOptions?.rows,
    } as CSSProperties;

    return (
      <div
        ref={mergedRef}
        className={classnames(styles.grid, {
          [styles.isScroll]: isScroll || scrollOptions,
          [styles.isScrollbarHidden]: scrollOptions?.hideScrollbar,
        })}
        style={styleMap}
        {...rest}
      >
        {children}
      </div>
    );
  },
);
