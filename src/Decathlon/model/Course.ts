export class Course {
    private _type: string;
    private _time: number;
    private _points: number;
    private _year: number;

    constructor(type: string, time: number, year = 2023) {
        this._type = type;
        this._time = time;
        this._year = year;
        this._points = 0;
        this.addPoints(time);
    }

    get type(): string {
        return this._type;
    }

    get time(): number {
        return this._time;
    }

    get points(): number {
        return this._points;
    }

    get year(): number {
        return this._year;
    }

    set type(value: string) {
        this._type = value;
    }

    set time(time: number) {
        this._time = time;
    }

    set year(year: number) {
        this._year = year;
    }

    addPoints(value: number): void {
        if (this._type === "100m") {
            if (value > 11.75) {
                this._points = 0;
            } else {
                this._points = Math.floor(700 + (300 / 1.36) * (11.75 - value));
            }
        } else if (this._type === "400m") {
            if (value > 52.58) {
                this._points = 0;
            } else {
                this._points = Math.floor(700 + (300 / 6.41) * (52.58 - value));
            }
        } else if (this._type === "110m haies") {
            if (value > 16.29) {
                this._points = 0;
            } else {
                this._points = Math.floor(700 + (300 / 2.48) * (16.29 - value));
            }
        } else if (this._type === "1500m") {
            if (value > 276.96) {
                this._points = 0;
            } else {
                this._points = Math.floor(700 + (300 / 43.17) * (276.96 - value));
            }
        }
    }
}

/* Si Type = 1500m  le temps il faut le passer par parametre en seconds. Ex: 4min 39s 21  =>  279.21s */
