
export class Athlete {
    private _name: string;
    private _country: string;
    private _gender: string;
    private _points: number;

    constructor(name: string, country: string, gender: string) {
        this._name = name;
        this._country = country;
        this._gender = gender;
        this._points = 0;
    }

    get name(): string {
        return this._name;
    }

    get country(): string {
        return this._country;
    }

    get gender(): string {
        return this._gender;
    }

    get points(): number {
        return this._points;
    }

    set points(value: number) {
        this._points += value;
    }
}
