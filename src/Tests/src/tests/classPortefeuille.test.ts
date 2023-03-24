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