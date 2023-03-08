import { Course } from "./Course";
import { Epreuve } from "./Epreuve";

export class Performance {
    private _resultat: number;
    private _bareme: Array<[number, number, number]>;
    private _nbPoints: number;

    constructor(epreuve: Epreuve, res: number) {
        this._bareme = [];
        this._nbPoints = 0;
        this._resultat = res;
        this.setBareme(epreuve);
    }

    get nbPoints(): number {
        return this._nbPoints;
    }

    setBareme(epreuve: Epreuve): void {
        switch (epreuve.type) {
            case "100m":
                this._bareme.push([11.75, 3291.9, 1.36])
                break;
            case "110m haies":
                this._bareme.push([16.29, 2670.56, 2.48]);
                break;
            case "400m":
                this._bareme.push([52.58, 3160.84, 6.41]);
                break;
            case "1500m":
                this._bareme.push([276.96, 2624.67, 43.17]);
                break;
            case "longueur":
                this._bareme.push([6.51, -862.4, 1.25]);
                break;
            case "hauteur":
                this._bareme.push([1.89, -1071.875, 0.32]);
                break;
            case "perche":
                this._bareme.push([4.3, -603.03, 0.99]);
                break;
            case "poids":
                this._bareme.push([13.53, -133.47, 4.87]);
                break;
            case "disque":
                this._bareme.push([41.72, -165.56, 14.46]);
                break;
            case "javelot":
                this._bareme.push([57.46, -173.25, 19.74]);
                break;
        }

        this.calculPoints(epreuve, this._resultat);
    }

    calculPoints(eprevue: Epreuve, value: number): number {
        if (eprevue.units === "s") {
            if (this._bareme[0][0] < value) {
                this._nbPoints = 0;
            } else {
                this._nbPoints = Math.floor((-300 / this._bareme[0][2]) * value + (this._bareme[0][1]));
            }
        } else {
            if (this._bareme[0][0] > value) {
                this._nbPoints = 0;
            } else {
                this._nbPoints = Math.floor((300 / this._bareme[0][2]) * value + (this._bareme[0][1]));
            }
        }

        return this._nbPoints;
    }

}