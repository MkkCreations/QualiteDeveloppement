import { Monnaie } from "../metier/Portefeuille/monnaie";

test('Constructeur par defaut', () => {
    const m = new Monnaie();
    expect(m.devise).toBe('EUR');
    expect(m.montant).toBe(100);
    expect(m.tauxConversion).toBe(1);
});

test('Constructeur avec parametres', () => {
    const m = new Monnaie('USD', 222, 2);
    expect(m.devise).toBe('USD');
    expect(m.montant).toBe(222);
    expect(m.tauxConversion).toBe(2);
})

test('Constructeur avec un parametre', () => {
    const m = new Monnaie('USD');
    expect(m.devise).toBe('USD');
    expect(m.montant).toBe(100);
    expect(m.tauxConversion).toBe(1);
});

test('Construecteur avec nombre negatives', () => {
    expect(() => new Monnaie('USD', -222, -2)).toThrowError();
})

test('Constructeur avec parametres non entier', () => {
    const m = new Monnaie('USD', 222.22, 2.22);
    expect(m.devise).toBe('USD');
    expect(m.montant).toBe(222.22);
    expect(m.tauxConversion).toBe(2.22);
});

test('Devise vide', () => {
    expect(() => new Monnaie('', 222, 2)).toThrowError();
});

test('Set montant negatifs', () => {
    expect(() => new Monnaie('USD', 222, 2).montant = -1).toThrowError();
});

test('GetValeurEnEuros', () => {
    const m = new Monnaie('USD', 222, 2);
    expect(m.getValeurEnEuros()).toBe(111);
});

test('ajouteMontant', () => {
    const m = new Monnaie('USD', 222, 2);
    m.ajouteMontant(100);
    expect(m.montant).toBe(322);
});

test('ajouteMontant negatif', () => {
    const m = new Monnaie('USD', 222, 2);
    expect(() => m.ajouteMontant(-100)).toThrowError();
});

test('retrancheMontant', () => {
    const m = new Monnaie('USD', 222, 2);
    expect(m.retrancheMontant(100)).toBeFalsy();
});

test('retrancheMontant negatif', () => {
    const m = new Monnaie('USD', 222, 2);
    expect(() => m.retrancheMontant(-100)).toThrowError();
});

test('retrancheMontant plus grand que montant', () => {
    const m = new Monnaie('USD', 222, 2);
    expect(() => m.retrancheMontant(300)).toThrowError();
});

test('toString', () => {
    const m = new Monnaie('USD', 222, 2);
    expect(m.toString()).toBe('222 USD (111 euros)');
});