import React, {
  CSSProperties,
  forwardRef,
  useCallback,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { mergeRefs } from 'react-merge-refs';
import {
  calcColumns,
  convertUnit,
  getHorizontalGap,
} from '@mordech/dynamic-grid-core/lib';
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
  shrink?: boolean;
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
      shrink = true,
      className,
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
          gap: gap ? convertUnit(getHorizontalGap(gap), 'px') : undefined,
          dividedBy,
          maxColumns,
          scrollHint: scrollOptions?.hint,
        }),
      [minColumnWidth, gap, maxColumns, dividedBy, scrollOptions?.hint],
    );

    useLayoutEffect(() => {
      const handleResize = () => {
        maxColumns || dividedBy || isScroll || scrollOptions
          ? setColumns(getColumns)
          : setColumns(NaN);
      };

      handleResize();

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
      '--dg-gap-inline': gap ? getHorizontalGap(gap) : undefined,
      '--dg-scroll-hint': scrollOptions?.hint,
      '--dg-scroll-snap-align': scrollOptions?.scrollSnapAlign,
      '--dg-scroll-rows': scrollOptions?.rows,
    } as CSSProperties;

    return (
      <div
        ref={mergedRef}
        className={classnames(className, styles.dgGrid, {
          [styles.dgIsScroll]: isScroll || scrollOptions,
          [styles.dgIsScrollbarHidden]: scrollOptions?.hideScrollbar,
          [styles.dgIsShrink]: shrink,
        })}
        style={styleMap}
        {...rest}
      >
        {children}
      </div>
    );
  },
);
