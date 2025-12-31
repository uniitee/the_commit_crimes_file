export function getMode() {
  const base = "etcevitced";
  const tier = "orp";
  return (
    base.split("").reverse().join("") +
    "_" +
    "gol".split("").reverse().join("") +
    "_" +
    tier.split("").reverse().join("")
  );
}