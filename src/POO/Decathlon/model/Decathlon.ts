import { Athlete } from "./Athlete";

export class Decathlon {
    private _particiers: Array<Athlete> = [];
    private _theBest: Athlete;

    get particiers(): Array<Athlete> {
        return this._particiers;
    }

    get theBest(): Athlete {
        return this._theBest;
    }

    addParticier(...value: Array<Athlete>): void {
        for (const key in value) {
            this._particiers.push(value[key]);
        }
    }

    theBestDecathlon(): Athlete | null {
        let best = new Athlete("", "", "");
        for (let i = 0; i < this._particiers.length; i++) {
            if (this._particiers[i].points > best.points) {
                best = this._particiers[i];
            }
        }
        return best.points ? best : null;
    }

    theBestSauteur(): Athlete | null {
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
    }

    theBestCountry(nationalite: string): Athlete | null {
        let best = new Athlete("", "", "");
        for (const key in this._particiers) {
            if (
                this._particiers[key].country === nationalite &&
                this._particiers[key].points > best!.points
            ) {
                best = this._particiers[key];
            }
        }
        return best.country ? best : null;
    }
    showAll(): void {
        let map: Map<string, number> = new Map();
        for (let i = 0; i < this._particiers.length; i++) {
            map.set(this._particiers[i].name, this._particiers[i].points);
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
