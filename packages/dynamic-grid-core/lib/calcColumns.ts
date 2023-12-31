interface CalcColumnParams {
  minWidth: number;
  elementWidth: number;
  gap: number | undefined;
  dividedBy: number | undefined;
  maxColumns: number | undefined;
  scrollHint: number | undefined;
}

const divideColumns = (columns: number, divideBy: number) =>
  Math.floor(columns / divideBy) * divideBy;

export const calcColumns = ({
  minWidth,
  elementWidth,
  gap = 0,
  dividedBy = 1,
  maxColumns = Infinity,
  scrollHint = 0,
}: CalcColumnParams): number => {
  if (minWidth === 0 || elementWidth === 0 || elementWidth < minWidth) {
    return 1;
  }

  const calcBase = Math.floor(
    (elementWidth + gap - minWidth * scrollHint) / (minWidth + gap),
  );
  const columns = Math.min(calcBase, maxColumns);
  return Math.max(1, divideColumns(columns, dividedBy));
};
