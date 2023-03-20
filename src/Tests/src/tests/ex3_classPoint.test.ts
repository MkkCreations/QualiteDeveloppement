import { Point } from '../metier/ex3/Point';

test('Constructeur par defaut', () => {
    const p1 = new Point();
    expect(p1.abs).toEqual(0);
    expect(p1.ord).toEqual(0);
});

test('Constructeur avec parametres', () => {
    const p1 = new Point(2, 3);
    expect(p1.abs).toEqual(2);
    expect(p1.ord).toEqual(3);
});

test('get abs', () => {
    const p1 = new Point(2, 3);
    expect(p1.abs).toEqual(2);
});

test('set abs', () => {
    const p1 = new Point(2, 3);
    p1.abs = 1;
    expect(p1.abs).toEqual(1);
});

test('get ord', () => {
    const p1 = new Point(2, 3);
    expect(p1.ord).toEqual(3);
});

test('set ord', () => {
    const p1 = new Point(2, 3);
    p1.ord = 1;
    expect(p1.ord).toEqual(1);
});

test('toString', () => {
    const p1 = new Point(2, 3);
    expect(p1.toString()).toEqual('(2, 3)');
});

test('déplace', () => {
    const p1 = new Point(2, 3);
    p1.déplace(1, 2);
    expect(p1.abs).toEqual(3);
    expect(p1.ord).toEqual(5);
});

test('somme', () => {
    const p1 = new Point(2, 3);
    const p2 = new Point(1, 2);
    const p3 = p1.somme(p2);
    expect(p3.abs).toEqual(3);
    expect(p3.ord).toEqual(5);
});

test('egal', () => {
    const p1 = new Point(2, 3);
    const p2 = new Point(1, 2);
    const p3 = new Point(2, 3);
    expect(p1.egal(p2)).toEqual(false);
    expect(p1.egal(p3)).toEqual(true);
});

test('egal_static', () => {
    const p1 = new Point(2, 3);
    const p2 = new Point(1, 2);
    const p3 = new Point(2, 3);
    expect(Point.egal_static(p1, p2)).toEqual(false);
    expect(Point.egal_static(p1, p3)).toEqual(true);
});