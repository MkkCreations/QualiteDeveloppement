import { Epreuve } from "./Epreuve";

export class Course extends Epreuve {
    private _time: number;

    constructor(type: string, time: number, year = 2023) {
        super(type, year, "s", time);
        this._time = time;
    }

    get time(): number {
        return this._time;
    }

    set time(time: number) {
        this._time = time;
    }
}

/* Si Type = 1500m  le temps il faut le passer par parametre en seconds. Ex: 4min 39s 21  =>  279.21s */
