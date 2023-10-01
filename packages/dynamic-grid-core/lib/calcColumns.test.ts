import { calcColumns } from './calcColumns';

const baseProps = {
  gap: undefined,
  dividedBy: undefined,
  maxColumns: undefined,
  scrollHint: undefined,
};

describe('calcColumns', () => {
  it('returns 1 if minWidth is 0', () => {
    expect(
      calcColumns({
        ...baseProps,
        minWidth: 0,
        elementWidth: 100,
      }),
    ).toBe(1);
  });

  it('returns 1 if elementWidth is 0', () => {
    expect(
      calcColumns({
        ...baseProps,
        minWidth: 100,
        elementWidth: 0,
      }),
    ).toBe(1);
  });

  it('returns 1 if elementWidth is less than minWidth', () => {
    expect(
      calcColumns({
        ...baseProps,
        minWidth: 100,
        elementWidth: 50,
      }),
    ).toBe(1);
  });

  it('returns 1 if elementWidth is equal to minWidth', () => {
    expect(
      calcColumns({
        ...baseProps,
        minWidth: 100,
        elementWidth: 100,
      }),
    ).toBe(1);
  });

  it('returns 2 if elementWidth is twice minWidth', () => {
    expect(
      calcColumns({
        ...baseProps,
        minWidth: 100,
        elementWidth: 200,
      }),
    ).toBe(2);
  });

  it('returns 2 if elementWidth is equal to minWidth * 2 + gap', () => {
    expect(
      calcColumns({
        ...baseProps,
        minWidth: 100,
        elementWidth: 250,
        gap: 50,
      }),
    ).toBe(2);
  });

  it('returns 2 if elementWidth is greater than minWidth * 2 + gap', () => {
    expect(
      calcColumns({
        ...baseProps,
        minWidth: 100,
        elementWidth: 251,
        gap: 50,
      }),
    ).toBe(2);
  });

  it('returns 3 if elementWidth is equal to minWidth * 3 + gap * 2', () => {
    expect(
      calcColumns({
        ...baseProps,
        minWidth: 100,
        elementWidth: 400,
        gap: 50,
      }),
    ).toBe(3);
  });
});
