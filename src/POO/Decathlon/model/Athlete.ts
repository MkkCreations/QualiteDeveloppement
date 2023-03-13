import { Epreuve } from "./Epreuve";

export class Athlete {
    private _name: string;
    private _country: string;
    private _gender: string;
    private _points: number;
    private _epreuve: Map<Epreuve, number>;

    constructor(name: string, country: string, gender: string) {
        this._name = name;
        this._country = country;
        this._gender = gender;
        this._points = 0;
        this._epreuve = new Map();
    }

    get name(): string {
        return this._name;
    }

    get country(): string {
        return this._country;
    }

    get gender(): string {
        return this._gender;
    }

    get points(): number {
        return this._points;
    }

    addEpreuve(...epreuve: Array<Epreuve>): void {
        for (const key of epreuve) {
            this._epreuve.set(key, key.points);
            this._points += key.points;
        }
    }

    getPointsSaut(): number {
        return this.getPointsSautHauteur() + this.getPointsSautLongueur() + this.getPointsSautPerche();
    }

    getPointsCourse(): number {
        return this.getPointsCourse100() + this.getPointsCourse400() + this.getPointsCourse1500();
    }

    getPointsLancer(): number {
        return this.getPointsLancerDisque() + this.getPointsLancerJavelot();
    }

    getPointsSautLongueur(): number {
        for (const key of this._epreuve) {
            if (key[0].type === "longueur") {
                return key[1];
            }
        }
        return 0;
    }

    getPointsSautHauteur(): number {
        for (const key of this._epreuve) {
            if (key[0].type === "hauteur") {
                return key[1];
            }
        }
        return 0;
    }
    getPointsSautPerche(): number {
        for (const key of this._epreuve) {
            if (key[0].type === "perche") {
                return key[1];
            }
        }
        return 0;
    }

    getPointsCourse100(): number {
        for (const key of this._epreuve) {
            if (key[0].type === "100m") {
                return key[1];
            }
        }
        return 0;
    }

    getPointsCourse400(): number {
        for (const key of this._epreuve) {
            if (key[0].type === "400m") {
                return key[1];
            }
        }
        return 0;
    }

    getPointsCourse110(): number {
        for (const key of this._epreuve) {
            if (key[0].type === "110m haies") {
                return key[1];
            }
        }
        return 0;
    }

    getPointsCourse1500(): number {
        for (const key of this._epreuve) {
            if (key[0].type === "1500m") {
                return key[1];
            }
        }
        return 0;
    }

    getPointsLancerPoids(): number {
        for (const key of this._epreuve) {
            if (key[0].type === "poids") {
                return key[1];
            }
        }
        return 0;
    }

    getPointsLancerDisque(): number {
        for (const key of this._epreuve) {
            if (key[0].type === "disque") {
                return key[1];
            }
        }
        return 0;
    }

    getPointsLancerJavelot(): number {
        for (const key of this._epreuve) {
            if (key[0].type === "javelot") {
                return key[1];
            }
        }
        return 0;
    }
}
