import { Epreuve } from "./Epreuve";

export class Saut extends Epreuve {
    private _distance: number;

    constructor(type: string, distance: number, year = 2023) {
        super(type, year, "m", distance);
        this._distance = distance;
        this._points = this._bareme.calculPoints();
    }

    get distance(): number {
        return this._distance;
    }

    set distance(value: number) {
        this._distance = value;
    }

    get points(): number {
        return this._points;
    }

}
