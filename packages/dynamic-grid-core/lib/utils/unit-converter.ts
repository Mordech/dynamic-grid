export function getUnit(value: number | string) {
  if (typeof value === "number") return "px";
  const unit = value.replace(/[\d.]/g, "");
  return unit === "" ? "px" : unit;
}

export function convertUnit(value: number | string, toUnit: "px" | "rem") {
  const rem = parseFloat(
    getComputedStyle(document.documentElement).fontSize || "16",
  );

  if (typeof value === "number") return value;

  const unit = getUnit(value);

  const number = parseFloat(value);

  if (unit === toUnit) return number;
  if (unit === "px" && toUnit === "rem") return number / rem;
  if (unit === "rem" && toUnit === "px") return number * rem;
  throw new Error(`Cannot convert ${unit} to ${toUnit}, use px or rem`);
}
