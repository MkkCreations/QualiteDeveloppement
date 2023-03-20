
import { getFizzBuzzle } from '../metier/ex1/FizzBuzzle';

test('cas general', () => {
    expect(getFizzBuzzle(5)).toEqual('Buzz');
});

test('cas general', () => {
    expect(getFizzBuzzle(3)).toEqual('Fizz');
});

test('cas pas divisible', () => {
    expect(getFizzBuzzle(7)).toEqual('7');
})

test('cas divisible par 15', () => {
    expect(getFizzBuzzle(15)).toEqual('FizzBuzz');
});

test('cas negatif', () => {
    expect(getFizzBuzzle(-3)).toEqual('Fizz');
})

test('cas 0', () => {
    expect(getFizzBuzzle(0)).toEqual('FizzBuzz');
});