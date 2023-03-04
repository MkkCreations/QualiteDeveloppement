import { Epreuve } from "./Epreuve";
import { IBareme } from "./IBareme";
import { IPoints } from "./IPoints";

export class Course extends Epreuve implements IPoints, IBareme {
    private _time: number;
    private _mapBareme: Map<string, [number, number, number]>;

    constructor(type: string, time: number, year = 2023) {
        super(type, year);
        this._time = time;
        this._mapBareme = new Map<string, [number, number, number]>();
        this.setBareme();
        this.addPoints(time);
    }

    get time(): number {
        return this._time;
    }

    set time(time: number) {
        this._time = time;
    }

    setBareme(): void {
        this._mapBareme.set("100m", [11.75, 3291.9, 1.36]);
        this._mapBareme.set("400m", [52.58, 3160.84, 6.41]);
        this._mapBareme.set("110m haies", [16.29, 2670.56, 2.48]);
        this._mapBareme.set("1500m", [276.96, 2624.67, 43.17]);
    }

    addPoints(value: number): void {
        if (this._mapBareme.get(this._type)![0] < value) {
            this._points = 0;
        } else {
            this._points = Math.floor((-300 / this._mapBareme.get(this._type)![2]) * value + (this._mapBareme.get(this._type)![1]));
        }
    }
}

/* Si Type = 1500m  le temps il faut le passer par parametre en seconds. Ex: 4min 39s 21  =>  279.21s */
