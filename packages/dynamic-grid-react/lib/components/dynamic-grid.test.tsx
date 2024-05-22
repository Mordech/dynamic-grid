import React from 'react';
import { render } from '@testing-library/react';

import { DynamicGrid } from './dynamic-grid';

beforeAll(() => {
  global.ResizeObserver = vitest.fn().mockImplementation(() => ({
    observe: vitest.fn(),
    unobserve: vitest.fn(),
    disconnect: vitest.fn(),
  }));

  Object.defineProperty(HTMLElement.prototype, 'clientWidth', {
    configurable: true,
    value: 600,
  });
});

describe('DynamicGrid', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DynamicGrid minColumnWidth="20px" />);
    expect(baseElement).toBeTruthy();
  });

  it('should render children', () => {
    const { getByText } = render(
      <DynamicGrid minColumnWidth="20px">
        <div>Test</div>
      </DynamicGrid>,
    );
    expect(getByText('Test')).toBeTruthy();
  });

  it('should render with default props', () => {
    const { getByTestId } = render(
      <DynamicGrid data-testid="dynamic-grid" minColumnWidth="20px" />,
    );
    expect(
      getByTestId('dynamic-grid').style.getPropertyValue('--dg-repeat-count'),
    ).toMatchInlineSnapshot('"auto-fill"');

    expect(
      getByTestId('dynamic-grid').style.getPropertyValue('--dg-gap'),
    ).toMatchInlineSnapshot('""');

    expect(
      getByTestId('dynamic-grid').style.getPropertyValue('--dg-min-width'),
    ).toMatchInlineSnapshot('"20px"');

    expect(
      getByTestId('dynamic-grid').style.getPropertyValue('--dg-scroll-hint'),
    ).toMatchInlineSnapshot('""');

    expect(
      getComputedStyle(getByTestId('dynamic-grid')).cssText,
    ).toMatchInlineSnapshot(
      `"display: grid; --dg-min-width-grid-shrink: min(100%, var(--dg-min-width, 200px)); grid-template-columns: repeat(var(--dg-repeat-count, auto-fit), minmax(var(--dg-min-width-grid-shrink, var(--dg-min-width, 200px)), 1fr)); gap: var(--dg-gap, unset); overflow: hidden; --dg-repeat-count: auto-fill; --dg-min-width: 20px; visibility: visible; pointer-events: auto; background-color: rgba(0, 0, 0, 0); border-block-start-color: CanvasText; border-block-end-color: CanvasText; border-inline-start-color: CanvasText; border-inline-end-color: CanvasText; caret-color: auto;"`,
    );
  });

  it('should the render props correctly', () => {
    const { getByTestId } = render(
      <DynamicGrid
        data-testid="dynamic-grid"
        minColumnWidth="20px"
        gridType="auto-fit"
        gap="10px"
        maxColumns={3}
        dividedBy={2}
        isScroll
        scrollOptions={{ hint: 0.5 }}
      />,
    );

    expect(
      getByTestId('dynamic-grid').style.getPropertyValue('--dg-repeat-count'),
    ).toBe('2');

    expect(getByTestId('dynamic-grid').style.getPropertyValue('--dg-gap')).toBe(
      '10px',
    );

    expect(
      getByTestId('dynamic-grid').style.getPropertyValue('--dg-min-width'),
    ).toBe('20px');

    expect(
      getByTestId('dynamic-grid').style.getPropertyValue('--dg-scroll-hint'),
    ).toBe('0.5');

    expect(
      getComputedStyle(getByTestId('dynamic-grid')).cssText,
    ).toMatchInlineSnapshot(
      `"display: grid; --dg-min-width-grid-shrink: min(100%, var(--dg-min-width, 200px)); gap: var(--dg-gap, unset); overflow: auto hidden; scroll-behavior: smooth; scroll-snap-type: x mandatory; grid-auto-flow: column; grid-template-rows: repeat(var(--dg-scroll-rows, 1), 1fr); grid-auto-columns: max((100% - (var(--dg-repeat-count, 4) + var(--dg-scroll-hint, 0) - 1) * var(--dg-gap-inline, var(--dg-gap, 0px))) / (var(--dg-repeat-count, 2) + var(--dg-scroll-hint, 0)), var(--dg-min-width-grid-shrink, var(--dg-min-width, 200px))); scrollbar-width: thin; --dg-repeat-count: 2; --dg-min-width: 20px; --dg-gap: 10px; --dg-gap-inline: 10px; --dg-scroll-hint: 0.5; visibility: visible; pointer-events: auto; background-color: rgba(0, 0, 0, 0); border-block-start-color: CanvasText; border-block-end-color: CanvasText; border-inline-start-color: CanvasText; border-inline-end-color: CanvasText; caret-color: auto;"`,
    );
  });

  it('should render 5 columns', () => {
    const { getByTestId } = render(
      <>
        <DynamicGrid
          data-testid="dynamic-grid"
          minColumnWidth="100px"
          gap="10px"
          dividedBy={1}
        >
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
          <div>Test</div>
        </DynamicGrid>
      </>,
    );

    expect(
      getByTestId('dynamic-grid').style.getPropertyValue('--dg-repeat-count'),
    ).toBe('5');

    expect(
      getComputedStyle(getByTestId('dynamic-grid')).cssText,
    ).toMatchInlineSnapshot(
      `"display: grid; --dg-min-width-grid-shrink: min(100%, var(--dg-min-width, 200px)); grid-template-columns: repeat(var(--dg-repeat-count, auto-fit), minmax(var(--dg-min-width-grid-shrink, var(--dg-min-width, 200px)), 1fr)); gap: var(--dg-gap, unset); overflow: hidden; --dg-repeat-count: 5; --dg-min-width: 100px; --dg-gap: 10px; --dg-gap-inline: 10px; visibility: visible; pointer-events: auto; background-color: rgba(0, 0, 0, 0); border-block-start-color: CanvasText; border-block-end-color: CanvasText; border-inline-start-color: CanvasText; border-inline-end-color: CanvasText; caret-color: auto;"`,
    );
  });
});
