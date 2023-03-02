import { Sportif } from "./Sportif";

export class Decathlon {
    private _particiers: Array<Sportif> = [];
    private _theBest: Sportif;

    get particiers(): Array<Sportif> {
        return this._particiers;
    }

    get theBest(): Sportif {
        return this._theBest;
    }

    addParticier(value: Sportif): void {
        this._particiers.push(value);
    }

    theBestDecathlon(): Sportif | null {
        let best = new Sportif("", "", "");
        for (let i = 0; i < this._particiers.length; i++) {
            if (this._particiers[i].points > best.points) {
                best = this._particiers[i];
            }
        }
        return best.points ? best : null;
    }

    theBestSauteur(): Sportif {
        let best = this._particiers[0];
        for (let i = 0; i < this._particiers.length; i++) {
            if (this._particiers[i].getPointsSaut() > best.getPointsSaut()) {
                best = this._particiers[i];
            }
        }
        return best;
    }

    theBestLanceur(): Sportif {
        let best = this._particiers[0];
        for (let i = 0; i < this._particiers.length; i++) {
            if (this._particiers[i].getPointsLancer() > best.getPointsLancer()) {
                best = this._particiers[i];
            }
        }
        return best;
    }

    theBestCourseur(): Sportif {
        let best = this._particiers[0];
        for (let i = 0; i < this._particiers.length; i++) {
            if (this._particiers[i].getPointsCourse() > best.getPointsCourse()) {
                best = this._particiers[i];
            }
        }
        return best;
    }

    theBestCountry(nationalite: string): Sportif | null {
        let best = new Sportif("", "", "");
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
        let array: Array<Array<string | number>> = [[]];
        for (let i = 0; i < this._particiers.length; i++) {
            array.push([this._particiers[i].name, this._particiers[i].points]);
        }
        console.log(this.sort(array));
    }

    private sort(ary: Array<Array<string | number>>): Array<Array<string | number>> {
        ary.sort((a, b) => {
            return a[1] < b[1] ? 1 : -1;
        });
        return ary;
    }
}
