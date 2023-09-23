interface CalcColumnParams {
  minWidth: number;
  elementWidth: number;
  gap?: number;
  dividedBy?: number;
  maxColumns?: number;
  scrollHint?: number;
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
  const calcBase = Math.floor(
    (elementWidth + gap - minWidth * scrollHint) / (minWidth + gap),
  );
  const columns = Math.min(calcBase, maxColumns);
  return Math.max(1, divideColumns(columns, dividedBy));
};
