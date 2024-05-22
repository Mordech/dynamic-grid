import { getHorizontalGap } from './get-horizontal-gap';
import { convertUnit } from './unit-converter';

describe('get last value of a gap', () => {
  it('should return the last value', () => {
    expect(getHorizontalGap('10px')).toBe('10px');
    expect(getHorizontalGap(10)).toBe(10);
    expect(getHorizontalGap('10px 20px')).toBe('20px');
  });
});

describe('convert unit', () => {
  it('should convert px to rem', () => {
    expect(convertUnit('10px', 'rem')).toBe(0.625);
  });
  it('should convert rem to px', () => {
    expect(convertUnit(getHorizontalGap('0.625rem'), 'px')).toBe(10);
  });
  it('should convert px to px', () => {
    expect(convertUnit(getHorizontalGap('8px 10px'), 'px')).toBe(10);
  });
  it('should convert rem to rem', () => {
    expect(convertUnit('0.625rem', 'rem')).toBe(0.625);
  });
  it('should throw error if unit is not px or rem', () => {
    expect(() => convertUnit('10em', 'rem')).toThrowError(
      'Cannot convert em to rem, use px or rem',
    );
  });
});
