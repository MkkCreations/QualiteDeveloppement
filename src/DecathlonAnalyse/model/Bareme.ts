import { Epreuve } from "./Epreuve";
import { Performance } from "./Performance";

export class Bareme {
    private _performance: Performance;
    private _epreuve: Epreuve;

    constructor(epreuve: Epreuve, res: number) {
        this._epreuve = epreuve;
        this._performance = new Performance(epreuve, res);
    }

    get performance(): Performance {
        return this.performance;
    }

    calculPoints(): number {
        return this._performance.nbPoints;
    }
}