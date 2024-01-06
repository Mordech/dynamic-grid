export function getHorizontalGap(gap: string | number): string | number {
  if (typeof gap === 'number') return gap;
  return gap.split(' ').pop() || gap;
}
