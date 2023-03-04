import { Epreuve } from "./Epreuve";
import { IPoints } from "./IPoints";
import { IBareme } from "./IBareme";

export class Saut extends Epreuve implements IPoints, IBareme {
    private _distance: number;
    private _mapBareme: Map<string, [number, number, number]>;

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

    set distance(value: number) {
        this._distance = value;
    }

    setBareme(): void {
        this._mapBareme.set("longueur", [6.51, -862.4, 1.25]);
        this._mapBareme.set("hauteur", [ 1.89, -1071.875, 0.32]);
        this._mapBareme.set("perche", [4.3, -603.03, 0.99]);
    }

    addPoints(value: number): void {
        if (this._mapBareme.get(this._type)![0] > value) {
            this._points = 0;
        } else {
            this._points = Math.floor((300 / this._mapBareme.get(this._type)![2]) * value + (this._mapBareme.get(this._type)![1]));
        }
    }
}
