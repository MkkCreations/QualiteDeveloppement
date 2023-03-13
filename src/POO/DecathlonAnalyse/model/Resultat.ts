import { Athlete } from "./Athlete";
import { Epreuve } from "./Epreuve";


export class Resultat {
    private _score: number;
    private _athlete: Athlete;
    private _epreuve: Map<Epreuve, number>;

    constructor(athlete: Athlete) {
        this._athlete = athlete;
        this._score = 0;
        this._epreuve = new Map();
    }

    get score(): number {
        return this._score;
    }

    get athlete(): Athlete {
        return this._athlete;
    }

    get epreuve(): Map<Epreuve, number> {
        return this._epreuve;
    }

    addEpreuve(epreuve: Epreuve): void {
        this._epreuve.set(epreuve, epreuve.calculPoints());
        this._score += epreuve.points;
        this._athlete.points = this._score;
    }

}
