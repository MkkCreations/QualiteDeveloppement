export class Monnaie {
  private _devise: string;
  private _montant: number;
  private _tauxConversion: number;

  constructor(
    devise: string = 'EUR',
    montant: number = 100,
    tauxConversion: number = 1
  ) {
    if (montant < 0 || tauxConversion < 0 || devise.trim().length != 3) {
      throw new Error("Le montant ou le taux doive être positive ou la devise doit être un code à 3 lettres.");
    }
    this.devise = devise;
    this.montant = montant;
    this.tauxConversion = tauxConversion;
  }

  get devise(): string {
    return this._devise;
  }

  set devise(devise: string) {
    if (devise.trim().length == 3) {
      this._devise = devise.trim();
    } else {
      throw new Error('la devise est un code à 3 lettres.');
    }
  }

  set montant(montant: number) {
    if (montant >= 0) {
      this._montant = montant;
    } else {
      throw new Error('le montant ne peut être négatif !');
    }
  }

  get montant(): number {
    return this._montant;
  }

  set tauxConversion(tauxConversion: number) {
    if (tauxConversion > 0) {
      this._tauxConversion = tauxConversion;
    } else {
      throw new Error('le taux de conversion doit être positif !');
    }
  }

  get tauxConversion(): number {
    return this._tauxConversion;
  }

  getValeurEnEuros(): number {
    return this._montant / this._tauxConversion;
  }

  ajouteMontant(montant: number): void {
    if (montant > 0) {
      this._montant += montant;
    } else {
      throw new Error('le montant à ajouter doit être positif !');
    }
  }

  retrancheMontant(montant: number): boolean {
    if (montant > 0) {
      if (montant <= this._montant) {
        this._montant -= montant;
        return this._montant === 0;
      }
      throw new Error('pas assez dans cette devise !');
    } else {
      throw new Error('le montant à retrancher doit être positif !');
    }
  }

  toString(): string {
    return (
      this._montant +
      ' ' +
      this._devise +
      (this._devise !== 'EUR' ? ' (' + this.getValeurEnEuros() + ' euros)' : '')
    );
  }
}
