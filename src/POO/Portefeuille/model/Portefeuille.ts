import { Devise } from "./Devise";

export class PorteFeuille {
    private devises_: Array<Devise> = [];

    constructor() {
        this.devises_.push(new Devise("euro", 0));
    }

    get devises(): object {
        return this.devises_;
    }
    chercher(d: string): Devise | undefined {
        return this.devises_.find((val) => val.nom === d);
    }
    private ajouterDevise(d: string, m: number): void {
        this.devises_.push(new Devise(d, m));
    }
    ajouter(d: string, m: number): void {
        if (m < 0) throw new Error("Montant Negative " + m).message;

        let devise = this.chercher(d);
        if (devise != undefined) devise!.ajouter = m;
        else this.ajouterDevise(d, m);
    }

    sortir(d: string, m: number): void {
        let devise = this.chercher(d);
        if (devise === undefined) throw new Error("La devise " + d + " existe pas").message;
        if (devise!.montant >= m) devise!.sortir = m;
        else throw new Error("Pas assais d'argent " + m).message;
    }

    afficher(): void {
        for (const key of this.devises_) {
            console.log(key.nom + ":", key.montant);
        }
    }
}

/* export class PorteFeuille {
    private devises_: { [key: string]: number };

    constructor() {
        this.devises_ = { euro: 0 };
    }

    get devises(): object {
        return this.devises_;
    }

    ajouter(d: string, n: number): void {
        this.devises_[d] = this.devises_[d] + n || 0 + n;
    }

    sortir(d: string, n: number): void {
        if (this.devises_[d] > n) this.devises_.d -= n;
        else throw new Error("Pas assais d'argent " + n).message;
    }

    aficher(): void {
        for (let i = 0; i < Object.keys(this.devises_).length; i++) {
            console.log(Object.keys(this.devises_)[i], ":", Object.values(this.devises_)[i]);
        }
    }
} */
