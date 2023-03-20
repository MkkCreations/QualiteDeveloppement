import { toDate }  from '../metier/Main-creeDate'

test('cas general', () => {
    expect(toDate('23/12/2023')).toEqual([23, 12, 2023]);
});

test('cas vide', () => {
    expect(() => toDate('')).toThrow(Error);
})

test('cas jour plus grand que 31', () => {
    expect(() => toDate('49/12/2334')).toThrow(Error);
})

test('cas moins plus grand que 12', () => {
    expect(() => toDate('29/32/2334')).toThrow(Error);
})

test('cas annee different de quatre chiffre', () => {
    expect(() => toDate('29/02/233')).toThrow(Error);
})


