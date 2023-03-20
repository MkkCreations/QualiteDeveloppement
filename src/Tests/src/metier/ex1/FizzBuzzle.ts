

export function fizzBuzzle(n: number): void {
    for(let i = 1; i <= n; i++) {
        console.log(getFizzBuzzle(i));
    }
}

export function getFizzBuzzle(n: number): string {
    if (n % 15 === 0) {
        return 'FizzBuzz';
    } else if (n % 3 === 0) {
        return 'Fizz';
    } else if (n % 5 === 0) {
        return 'Buzz';
    }
    return n.toString();
}