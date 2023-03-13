import { multAdd } from '../metier/Main';

test('cas général', () => {
  expect(multAdd(3, 8)).toBe(24);
});

test('multiplication par 0', () => {
  expect(multAdd(3, 0)).toBe(0);
});

test('multiplication par un négatif', () => {
  expect(multAdd(5, -4)).toBe(-20);
});

test('multiplication de 0', () => {
  expect(multAdd(0, 2)).toBe(0);
});
test('multiplication par 0 de 0', () => {
  expect(multAdd(0, 0)).toBe(0);
});
test("multiplication d'un négatif", () => {
  expect(multAdd(-1, 5)).toBe(-5);
});
