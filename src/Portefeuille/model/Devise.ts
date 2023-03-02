export class Devise {
    private nom_: string;
    private montant_: number;

    constructor(n: string, m: number) {
        this.nom_ = n;
        this.montant_ = m;
    }

    get nom(): string {
        return this.nom_;
    }

    get montant(): number {
        return this.montant_;
    }

    set ajouter(m: number) {
        if (m >= 0) this.montant_ += m;
        else throw new Error("Il faut que soit positive " + m).message;
    }

    set sortir(m: number) {
        if (this.montant >= m && m >= 0) this.montant_ -= m;
        else throw new Error("Pas assais d'argent ou nombre negative " + m).message;
    }

    afficher(): void {
        console.log(this.nom_, ":", this.montant_);
    }
}
