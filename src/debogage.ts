// Ex 1
function deb1(): number {
  let j = 200;
  let tab = [];
  for (let i = 0; i < 10; i++) {
    j -= 10;
    tab[i] = j;
  }
  return j;
}

/* deb1(); */

// Ex 3
function deb2(x: number, y: number): void {
  const tmp = y;
  y = x;
  x = tmp;
  console.log(x, y);
}

/* let x = 10;
let y = 20;
deb2(x, y);
console.log(x, y); */

// Ex 4
function deb3(xy: number[]): void {
  let temp = xy[0];
  xy[0] = xy[1];
  xy[1] = temp;
}
/* let xy = [10, 20];
deb3(xy);
console.log(xy); */

// Ex 5
/* let j = 10;
deb4();
console.log(j); */

function deb4(): number {
  let j = 25;
  for (let i = 0; i < 10; i++) {
    let j = 2 * i;
    console.log(j);
  }
  return j;
}

// Ex 6
/* let tab1 = [1, 2, 3];
let tab2 = [...tab1];

tab1[1] = 5;
console.log(tab1, tab2); */

// Ex 7
/* produit(5, -3); */

function produit(x: number, y: number): number {
  let val = 0;

  for (let i = 0; i < y; i++) {
    val += x;
  }
  return val;
}

// Ex 8
let n = 5;
console.log(deb6(n));
function deb6(n: number): number {
  if (n === 0) {
    return 1;
  }
  let valeur = n * deb6(n - 1);
  return valeur;
}
