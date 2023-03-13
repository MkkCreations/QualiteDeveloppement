import { puissance } from '../metier/Main';

test('cas général', () => {
  expect(puissance(4, 2)).toBe(16);
});

test('puissance par 0', () => {
  expect(puissance(3, 0)).toBe(1);
});

test('puissance par 1', () => {
  expect(puissance(3, 1)).toBe(3);
});

test('puissance negatie', () => {
    expect(() => puissance(3, -1)).toThrow(Error);
});

test('cas decimal', () => {
  expect(() => puissance(1.5, 1.5)).toThrow(Error);
});


