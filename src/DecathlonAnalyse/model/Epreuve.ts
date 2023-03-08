import { Bareme } from "./Bareme";

export abstract class Epreuve {
    protected _type: string;
    protected _points: number;
    protected _year: number;
    protected _units: string;
    protected _bareme: Bareme;

    constructor(type: string, year: number | 2023, units: string, res: number) {
        this._type = type;
        this._year = year;
        this._points = 0;
        this._units = units;
        this._bareme = new Bareme(this, res);
    }

    get type(): string {
        return this._type;
    }

    get points(): number {
        return this._points;
    }

    get year(): number {
        return this._year;
    }

    get units(): string {
        return this._units;
    }

    set type(value: string) {
        this._type = value;
    }

    set year(year: number) {
        this._year = year;
    }

    calculPoints(): number{
        this._points = this._bareme.calculPoints() | 0;
        return this._points;
    }
}
