import { Epreuve } from "./Epreuve";

export class Lancer extends Epreuve {
    private _distance: number;

    constructor(type: string, distance: number, year = 2023) {
        super(type, year, "m", distance);
        this._distance = distance;
    }

    get distance(): number {
        return this._distance;
    }

    set distance(distance: number) {
        this._distance = distance;
    }

}
