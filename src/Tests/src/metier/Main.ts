
export function puissance(x: number, y: number): number {
  let val = 1;
  if ( y < 0 ) {
    throw new Error("La fonction n'est pas capable d'operer avec des nombre negatives");
  } else if (!Number.isInteger(y)){
    throw new Error("Imposible avec puissence decmial");
  } else {
    for (let i = 0; i < y; i++) {
      val *= x;
    }
  }
  return val;
}
