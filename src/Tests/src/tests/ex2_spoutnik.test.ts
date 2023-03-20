
import { getSpoutnik } from '../metier/ex2/Spoutnik';

test('cas general', () => {
    expect(getSpoutnik(120)).toEqual('Spoutnik FizzBuzz');
});

test('cas multiple de 4 et 5', () => {
    expect(getSpoutnik(40)).toEqual('Spoutnik Buzz');
});

test('cas multiple de 3 et 4', () => {
    expect(getSpoutnik(12)).toEqual('SpouFizz');
});

test('cas negative', () => {
    expect(getSpoutnik(-1)).toEqual('-1');
});

test('cas 0', () => {
    expect(getSpoutnik(0)).toEqual('Spoutnik FizzBuzz');
});