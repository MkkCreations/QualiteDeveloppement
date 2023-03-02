export class Lancer {
    private _type: string;
    private _points: number;
    private _distance: number;
    private _year: number;

    constructor(type: string, distance: number, year = 2023) {
        this._type = type;
        this._distance = distance;
        this._year = year;
        this._points = 0;
        this.addPoints(distance);
    }

    get type(): string {
        return this._type;
    }

    get points(): number {
        return this._points;
    }

    get distance(): number {
        return this._distance;
    }

    get year(): number {
        return this._year;
    }

    set type(value: string) {
        this._type = value;
    }

    set distance(distance: number) {
        this._distance = distance;
    }

    set year(year: number) {
        this._year = year;
    }

    addPoints(value: number): void {
        if (this._type === "poids") {
            if (value < 13.53) {
                this._points = 0;
            } else {
                this._points = Math.floor(700 + (300 / 4.87) * (18.4 - value));
            }
        } else if (this._type === "disque") {
            if (value < 41.72) {
                this._points = 0;
            } else {
                let p = 300 / 14.46;
                this._points = Math.floor(700 + (300 / 14.46) * (56.18 - value));
            }
        } else if (this._type === "javelot") {
            if (value < 57.46) {
                this._points = 0;
            } else {
                this._points = Math.floor(700 + (300 / 19.74) * (77.2 - value));
            }
        }
    }
}
