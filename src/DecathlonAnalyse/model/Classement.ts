import { Course } from "./Course";
import { Decathlon } from "./Decathlon";
import { Lancer } from "./Lancer";
import { Resultat } from "./Resultat";
import { Saut } from "./Saut";


export class Classement {
    private _decathlon: Decathlon;
    private _resultat: Array<Resultat> = [];
    private _theBest: Resultat;
    private _bestCourse: Resultat | null;
    private _bestSaut: Resultat | null;
    private _bestLancer: Resultat | null;

    constructor(decathlon: Decathlon) {
        this._decathlon = decathlon;
        this._resultat = [];
        this._bestCourse = null;
        this._bestSaut = null;
        this._bestLancer = null;
    }

    get decathlon(): Decathlon {
        return this._decathlon;
    }

    get theBest(): Resultat {
        return this._theBest;
    }

    get bestCourse(): Resultat | null {
        return this._bestCourse;
    }

    get bestSaut(): Resultat | null {
        return this._bestSaut;
    }

    get bestLancer(): Resultat | null {
        return this._bestLancer;
    }

    set decathlon(value: Decathlon) {
        this._decathlon = value;
    }

    addResultat(...value: Resultat[]): void {
        value.forEach((resultat) => {
            this._resultat.push(resultat);
        })
        this.sortResultat();
        this._theBest = this._resultat[0];
        this._bestCourse = this.theBestCourse()!;
        this._bestSaut = this.theBestSaut()!;
        this._bestLancer = this.theBestLancer()!;
    }

    private sortResultat(): void {
        this._resultat.sort((a, b) => {
            return b.score - a.score;
        })
    }

    private theBestCourse(): Resultat | null {
        let best: Array<[Resultat, number]> = [];
        for (const key of this._resultat) {
            key.epreuve.forEach((value, k) => {
                if (k instanceof Course){ 
                    best = [];
                    best.push([key, value]);
                }
            })
        }

        return best ? best[0][0] : null;
    }

    private theBestSaut(): Resultat | null {
        let best: Array<[Resultat, number]> = [];
        for (const key of this._resultat) {
            key.epreuve.forEach((value, k) => {
                if (k instanceof Saut){ 
                    best = [];
                    best.push([key, value]);
                }
            })
        }
            
        return best ? best[0][0] : null;
    }

    private theBestLancer(): Resultat | null {
        let best: Array<[Resultat, number]> = [];
        for (const key of this._resultat) {
            key.epreuve.forEach((value, k) => {
                if (k instanceof Lancer){
                    best = [];
                    best.push([key, value]);
                }
            })
        }

        return best ? best[0][0] : null;
    }
}