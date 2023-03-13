import { IBareme } from "./IBareme";
import { IPoints } from "./IPoints";

export abstract class Epreuve implements IBareme, IPoints {
    protected _type: string;
    protected _points: number;
    protected _year: number;
    protected _mapBareme: Map<string, [number, number, number]>;

    constructor(type: string, year = 2023) {
        this._type = type;
        this._year = year;
        this._points = 0;
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

    set type(value: string) {
        this._type = value;
    }

    set year(year: number) {
        this._year = year;
    }

    abstract setBareme(): void;
    abstract addPoints(value: number): void;
}
