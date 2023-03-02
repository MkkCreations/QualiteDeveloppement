import { Saut } from "./Saut";
import { Course } from "./Course";
import { Lancer } from "./Lancer";

export class Sportif {
    private _name: string;
    private _country: string;
    private _gender: string;
    private _points: number;
    private _saut: Array<Saut> = [];
    private _course: Array<Course> = [];
    private _lancer: Array<Lancer> = [];

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

    get saut(): Array<Saut> {
        return this._saut;
    }

    get course(): Array<Course> {
        return this._course;
    }

    get lancer(): Array<Lancer> {
        return this._lancer;
    }
    addPoints(points: number): void {
        this._points += points;
    }

    addSaut(saut: Saut): void {
        this._saut.push(saut);
        this._points += saut.points;
    }

    addCourse(course: Course): void {
        this._course.push(course);
        this._points += course.points;
    }

    addLancer(lancer: Lancer): void {
        this._lancer.push(lancer);
        this._points += lancer.points;
    }

    getPointsSaut(): number {
        let points = 0;

        points += this.getPointsSautHauteur();
        points += this.getPointsSautLongueur();
        points += this.getPointsSautPerche();

        return points;
    }

    getPointsCourse(): number {
        let points = 0;

        points += this.getPointsCourse100();
        points += this.getPointsCourse400();
        points += this.getPointsCourse110();
        points += this.getPointsCourse1500();

        return points;
    }

    getPointsLancer(): number {
        let points = 0;

        points += this.getPointsLancerDisque();
        points += this.getPointsLancerJavelot();
        points += this.getPointsLancerMarteau();

        return points;
    }

    getPointsSautLongueur(): number {
        let poids = 0;
        for (const key in this._saut) {
            if (this._saut[key].type === "longueur") {
                poids += this._saut[key].points;
            }
        }
        return poids;
    }

    getPointsSautHauteur(): number {
        let poids = 0;
        for (const key in this._saut) {
            if (this._saut[key].type === "hauteur") {
                poids += this._saut[key].points;
            }
        }
        return poids;
    }
    getPointsSautPerche(): number {
        let poids = 0;
        for (const key in this._saut) {
            if (this._saut[key].type === "perche") {
                poids += this._saut[key].points;
            }
        }
        return poids;
    }

    getPointsCourse100(): number {
        let poids = 0;
        for (const key in this._course) {
            if (this._course[key].type === "100m") {
                poids += this._course[key].points;
            }
        }
        return poids;
    }

    getPointsCourse400(): number {
        let poids = 0;
        for (const key in this._course) {
            if (this._course[key].type === "400m") {
                poids += this._course[key].points;
            }
        }
        return poids;
    }
    getPointsCourse110(): number {
        let poids = 0;
        for (const key in this._course) {
            if (this._course[key].type === "110m haites") {
                poids += this._course[key].points;
            }
        }
        return poids;
    }

    getPointsCourse1500(): number {
        let poids = 0;
        for (const key in this._course) {
            if (this._course[key].type === "1500m") {
                poids += this._course[key].points;
            }
        }
        return poids;
    }

    getPointsLancerPoids(): number {
        let poids = 0;
        for (const key in this._lancer) {
            if (this._lancer[key].type === "poids") {
                poids += this._lancer[key].points;
            }
        }
        return poids;
    }
    getPointsLancerDisque(): number {
        let poids = 0;
        for (const key in this._lancer) {
            if (this._lancer[key].type === "disque") {
                poids += this._lancer[key].points;
            }
        }
        return poids;
    }
    getPointsLancerJavelot(): number {
        let poids = 0;
        for (const key in this._lancer) {
            if (this._lancer[key].type === "javelot") {
                poids += this._lancer[key].points;
            }
        }
        return poids;
    }
    getPointsLancerMarteau(): number {
        let poids = 0;
        for (const key in this._lancer) {
            if (this._lancer[key].type === "marteau") {
                poids += this._lancer[key].points;
            }
        }
        return poids;
    }
}
