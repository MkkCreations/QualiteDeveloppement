

export function spoutnik(n: number): void {
    for(let i = 1; i <= n; i++) {
        console.log(getSpoutnik(i));
    }
}

export function getSpoutnik(n: number): string {
    if (n % 60 === 0) {
        return 'Spoutnik FizzBuzz';
    } else if (n % 20 === 0) {
        return 'Spoutnik Buzz';
    } else if (n % 15 === 0) {
        return 'FizzBuzz';
    } else if (n % 12 === 0){
        return 'SpouFizz';
    } else if (n % 3 === 0) {
        return 'Fizz';
    } else if (n % 4 === 0) {
        return 'Spoutnik';
    } else if (n % 5 === 0) {
        return 'Buzz';
    }

    return n.toString();
}