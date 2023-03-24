import { Monnaie } from './monnaie';

export class Portefeuille {
  private _liste: Monnaie[];

  constructor() {
    this.liste = [];
  }

  set liste(list: Monnaie[]) {
    this._liste = list;
  }

  get liste(): Monnaie[] {
    return this._liste;
  }

  getIndexDevise(devise: string): number {
    for (let i: number = 0; i < this._liste.length; i++) {
      if (this._liste[i].devise === devise) {
        return i;
      }
    }
    return -1;
  }

  deviseDejaPossedee(devise: string): boolean {
    return this.getIndexDevise(devise) !== -1;
  }

  ajouteMonnaie(monnaie: Monnaie): void {
    const position = this.getIndexDevise(monnaie.devise);
    if (position === -1) {
      this._liste.push(monnaie);
    } else {
      this._liste[position].ajouteMontant(monnaie.montant);
    }
  }

  retrancheMonnaie(monnaie: Monnaie): void {
    const position = this.getIndexDevise(monnaie.devise);
    if (position === -1) {
      throw new Error("Cette devise n'est pas dans votre portefeuille !");
    } else {
      const plusRien: boolean = this._liste[position].retrancheMontant(
        monnaie.montant
      );
      if (plusRien) {
        this._liste.splice(position, 1);
      }
    }
  }

  getTotal(): number {
    let total: number = 0;
    this._liste.forEach((value: Monnaie) => {
      total += value.getValeurEnEuros();
    });
    return total;
  }

  toString(): string {
    if (this._liste.length === 0) {
      return 'Portefeuille vide...';
    }
    let contenu: string = '';
    this._liste.forEach((value: Monnaie) => {
      contenu += value.toString() + ' ; ';
    });

    contenu = contenu.substring(0, contenu.length - 3) + '.';
    return contenu;
  }
}
