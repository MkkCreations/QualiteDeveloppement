import { Athlete } from "./Athlete";

export class Decathlon {
    private _date: Date;
    private _participers: Array<Athlete> = [];
    private _theBest: Athlete;
    private _epreuve: string[];

    constructor(epreuve: string[] | string[]=["Course", "Saut", "Lancer"]) {
        this._date = new Date();
        this._epreuve = epreuve;
    }

    get date(): Date {
        return this._date;
    }

    get particiers(): Array<Athlete> {
        return this._participers;
    }

    get theBest(): Athlete {
        return this._theBest;
    }

    get epreuve(): string[] {
        return this._epreuve;
    }

    addParticier(...value: Array<Athlete>): void {
        for (const key in value) {
            this._participers.push(value[key]);
        }
    }

    theBestDecathlon(): Athlete | null {
        let best = new Athlete("", "", "");
        for (let i = 0; i < this._participers.length; i++) {
            if (this._participers[i].points > best.points) {
                best = this._participers[i];
            }
        }
        return best.points ? best : null;
    }

  /*   theBestSauteur(): Athlete | null {
        let best = new Athlete("", "", "");
        for (let i = 0; i < this._particiers.length; i++) {
            if (this._particiers[i].getPointsSaut() > best.getPointsSaut()) {
                best = this._particiers[i];
            }
        }
        return best.points ? best : null;
    }

    theBestLanceur(): Athlete | null {
        let best = new Athlete("", "", "");
        for (let i = 0; i < this._particiers.length; i++) {
            if (this._particiers[i].getPointsLancer() > best.getPointsLancer()) {
                best = this._particiers[i];
            }
        }
        return best.points ? best : null;
    }

    theBestCourseur(): Athlete | null {
        let best = new Athlete("", "", "");
        for (let i = 0; i < this._particiers.length; i++) {
            if (this._particiers[i].getPointsCourse() > best.getPointsCourse()) {
                best = this._particiers[i];
            }
        }
        return best.points ? best : null;
    } */

    theBestCountry(nationalite: string): Athlete | null {
        let best = new Athlete("", "", "");
        for (const key in this._participers) {
            if (
                this._participers[key].country === nationalite &&
                this._participers[key].points > best!.points
            ) {
                best = this._participers[key];
            }
        }
        return best.country ? best : null;
    }
    showAll(): void {
        let map: Map<string, number> = new Map();
        for (let i = 0; i < this._participers.length; i++) {
            map.set(this._participers[i].name, this._participers[i].points);
        }
        console.log(this.sort(map));
    }

    private sort(map: Map<string, number>): Map<string, number> {
        map = new Map(
            [...map.entries()].sort((a, b) => {
                return b[1] - a[1];
            })
        );
        return map;
    }
}
