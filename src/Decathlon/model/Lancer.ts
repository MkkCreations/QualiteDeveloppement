import { Epreuve } from "./Epreuve";
import { IPoints } from "./IPoints";
import { IBareme } from "./IBareme";

export class Lancer extends Epreuve implements IPoints, IBareme {
    private _distance: number;

    constructor(type: string, distance: number, year = 2023) {
        super(type, year);
        this._distance = distance;
        this._mapBareme = new Map<string, [number, number, number]>();
        this.setBareme();
        this.addPoints(distance);
    }

    get distance(): number {
        return this._distance;
    }

    set distance(distance: number) {
        this._distance = distance;
    }

    setBareme(): void {
        this._mapBareme.set("poids", [13.53, -133.47, 4.87]);
        this._mapBareme.set("disque", [41.72, -165.56, 14.46]);
        this._mapBareme.set("javelot", [57.46, -173.25, 19.74]);
    }

    addPoints(value: number): void {
        if (this._mapBareme.get(this._type)![0] > value) {
            this._points = 0;
        } else {
            this._points = Math.floor((300 / this._mapBareme.get(this._type)![2]) * value + (this._mapBareme.get(this._type)![1]));
        }
    }
}
