export class Saut {
    private _type: string;
    private _distance: number;
    private _points: number;
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

    get distance(): number {
        return this._distance;
    }

    set type(value: string) {
        this._type = value;
    }

    get points(): number {
        return this._points;
    }

    get year(): number {
        return this._year;
    }

    set distance(value: number) {
        this._distance = value;
    }

    set year(value: number) {
        this._year = value;
    }

    addPoints(value: number): void {
        if (this._type === "longueur") {
            if (value < 6.51) {
                this._points = 0;
            } else {
                this._points = Math.floor(700 + (300 / 1.25) * (7.76 - value));
            }
        } else if (this._type === "hauteur") {
            if (value < 1.89) {
                this._points = 0;
            } else {
                this._points = Math.floor(700 + (300 / 0.32) * (2.21 - value));
            }
        } else if (this._type === "perche") {
            if (value < 4.3) {
                this._points = 0;
            } else {
                this._points = Math.floor(700 + (300 / 0.99) * (5.29 - value));
            }
        }
    }
}
