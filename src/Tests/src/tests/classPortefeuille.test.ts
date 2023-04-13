import { Monnaie } from '../metier/Portefeuille/monnaie';
import { Portefeuille } from '../metier/Portefeuille/portefeuille'

test('Constructeur par defaut', () => {
    const p = new Portefeuille();
    expect(p.liste).toStrictEqual([]);
});

test('Set liste', () => {
    const p = new Portefeuille();
    const m = new Monnaie('USD', 222, 2);
    p.liste = [m];
    expect(p.liste).toStrictEqual([m]);
});

test('GetIndexDevise', () => {
    const p = new Portefeuille();
    const m = new Monnaie('USD', 222, 2);
    p.liste = [m];
    expect(p.getIndexDevise('USD')).toBe(0);
});

test('GetIndexDevise non existante', () => {
    const p = new Portefeuille();
    const m = new Monnaie('USD', 222, 2);
    p.liste = [m];
    expect(p.getIndexDevise('EUR')).toBe(-1);
});

test('DeviseDejaPossedee', () => {
    const p = new Portefeuille();
    const m = new Monnaie('USD', 222, 2);
    p.liste = [m];
    expect(p.deviseDejaPossedee('USD')).toBe(true);
});

test('Ajouter Monnaie', () => {
    const p = new Portefeuille();
    const m = new Monnaie('USD', 222, 2);
    p.ajouteMonnaie(m);
    expect(p.liste).toStrictEqual([m]);
});

test('Ajouter Monnaie deja existante', () => {
    const p = new Portefeuille();
    const m = new Monnaie('USD', 222, 2);
    const m1 = new Monnaie('USD', 300, 3);
    p.ajouteMonnaie(m);
    p.ajouteMonnaie(m1);
    expect(p.liste).toStrictEqual([m]);
});

test('Retranch monnaie', () => {
    const p = new Portefeuille();
    const m = new Monnaie('USD', 222, 2);
    p.ajouteMonnaie(m);
    p.retrancheMonnaie(m);
    expect(p.liste).toStrictEqual([]);
});

test('Retranch monnaie non existante', () => {
    const p = new Portefeuille();
    const m = new Monnaie('USD', 222, 2);
    expect(() => p.retrancheMonnaie(m)).toThrowError();
});

test('Get Total en euros', () => {
    const p = new Portefeuille();
    const m = new Monnaie('USD', 222, 2);
    const m1 = new Monnaie('EUR', 300, 1);
    p.ajouteMonnaie(m);
    p.ajouteMonnaie(m1);
    expect(p.getTotal()).toBe(411);
});

test('Get Total en euros vide', () => {
    const p = new Portefeuille();
    expect(p.getTotal()).toBe(0);
});

test('To string', () => {
    const p = new Portefeuille();
    const m = new Monnaie('USD', 222, 2);
    const m1 = new Monnaie('EUR', 300, 1);
    p.ajouteMonnaie(m);
    p.ajouteMonnaie(m1);
    expect(p.toString()).toBe('222 USD (111 euros) ; 300 EUR.');
});

test('To string vide', () => {
    const p = new Portefeuille();
    expect(p.toString()).toBe('Portefeuille vide...');
});