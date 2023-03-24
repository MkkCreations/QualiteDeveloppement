import { Point } from '../metier/ex4/Point';


test('Constructeur avec parametres', () => {
    const p = new Point(2, 3);
    expect(p.abs).toEqual(2);
    expect(p.ord).toEqual(3);
});

test('Constructeur qvec un pqrqmetre', () => {
    const p = new Point(2);
    expect(p.abs).toEqual(2);
    expect(p.ord).toEqual(0);
})

test('Constructeur avec parametres negatives', () => {
    expect(() => new Point(-2, -3)).toThrow(Error);
});

test('Set abs negatifs', () => {
    expect(() => new Point(2, 3).abs = -1).toThrow(Error);
});

test('Constructeur non entier', () => {
    const p1 = new Point(2.44, 3.02);
    expect(p1.abs).toEqual(2.44);
    expect(p1.ord).toEqual(3.02);
})

