export class Point {
  private _abs = 0;
  private _ord = 0;

  constructor(abs = 0, ord = 0) {
    this._abs = abs;
    this._ord = ord;
  }

  get abs(): number {
    return this._abs;
  }
  set abs(valeur) {
    this._abs = valeur;
  }

  get ord(): number {
    return this._ord;
  }
  set ord(valeur) {
    this._ord = valeur;
  }

  toString(): string {
    return '(' + this._abs + ', ' + this._ord + ')';
  }

  déplace(dabs: number, dord: number): void {
    this._abs += dabs;
    this._ord += dord;
  }

  somme(p: Point): Point {
    return new Point(this._abs + p._abs, this._ord + p._ord);
  }

  static egal_static(p1: Point, p2: Point): boolean {
    return p1.egal(p2);
  }

  egal(p: Point): boolean {
    return this._abs === p._abs && this._ord === p._ord;
  }
}
