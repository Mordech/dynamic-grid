import { html, render } from 'lit';

import { MrdDynamicGridElement } from './dynamic-grid';

async function getGridRef() {
  const grid = document.body.querySelector('mrd-dynamic-grid');
  await grid?.updateComplete;
  if (!grid?.gridRef.value) throw new Error('gridRef is undefined');
  return grid.gridRef.value;
}

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
  Object.defineProperty(HTMLElement.prototype, 'offsetWidth', {
    configurable: true,
    value: 600,
  });
});

describe('DynamicGrid', () => {
  it('should render successfully', () => {
    const grid = new MrdDynamicGridElement();
    grid.minColumnWidth = '20px';

    expect(grid).toBeTruthy();
  });

  it('should render with default props', async () => {
    const template = html`
      <mrd-dynamic-grid minColumnWidth="20px">
        <div>item</div>
      </mrd-dynamic-grid>
    `;
    render(template, document.body);

    const grid = await getGridRef();

    expect(grid.style.getPropertyValue('--dg-repeat-count')).toBe('auto-fill');

    expect(grid.style.getPropertyValue('--dg-gap')).toBe('');

    expect(grid.style.getPropertyValue('--dg-min-width')).toBe('20px');

    expect(grid.style.getPropertyValue('--dg-scroll-hint')).toBe('');
  });
});

it('should the props correctly', async () => {
  const template = html`
    <mrd-dynamic-grid
      minColumnWidth="20px"
      gridType="auto-fit"
      gap="10px"
      maxColumns=${3}
      dividedBy=${2}
      isScroll
      .scrollOptions=${{ hint: 0.5, hideScrollbar: true }}
    >
      <div>item</div>
    </mrd-dynamic-grid>
  `;
  render(template, document.body);

  const grid = await getGridRef();

  expect(grid.style.getPropertyValue('--dg-repeat-count')).toBe('2');

  expect(grid.style.getPropertyValue('--dg-gap')).toBe('10px');

  expect(grid.style.getPropertyValue('--dg-min-width')).toBe('20px');

  expect(grid.style.getPropertyValue('--dg-scroll-hint')).toBe('0.5');

  expect(grid.classList.contains('dg-is-scroll')).toBe(true);
  expect(grid.classList.contains('dg-is-scrollbar-hidden')).toBe(true);
});

it('should render 5 columns', async () => {
  const template = html`
    <mrd-dynamic-grid minColumnWidth="100px" gap="10px" dividedBy=${1}>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
      <div>Test</div>
    </mrd-dynamic-grid>
  `;
  render(template, document.body);
  const grid = await getGridRef();

  expect(grid.style.getPropertyValue('--dg-repeat-count')).toBe('5');
});
