export function multAdd(x: number, y: number): number {
  let val = 0;

  for (let i = 0; i < y; i++) {
    val += x;
  }
  return val;
}
