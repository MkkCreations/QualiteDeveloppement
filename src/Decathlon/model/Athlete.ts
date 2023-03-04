import { Saut } from "./Saut";
import { Course } from "./Course";
import { Lancer } from "./Lancer";

export class Athlete {
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

        points += this.getPointsLancerPoids();
        points += this.getPointsLancerDisque();
        points += this.getPointsLancerJavelot();

        return points;
    }

    getPointsSautLongueur(): number {
        return this._saut.find((saut) => saut.type === "longueur")!.points;
    }

    getPointsSautHauteur(): number {
        return this._saut.find((saut) => saut.type === "hauteur")!.points;
    }
    getPointsSautPerche(): number {
        return this._saut.find((saut) => saut.type === "perche")!.points;
    }

    getPointsCourse100(): number {
        return this._course.find((course) => course.type === "100m")!.points;
    }

    getPointsCourse400(): number {
        return this._course.find((course) => course.type === "400m")!.points;
    }

    getPointsCourse110(): number {
        return this._course.find((course) => course.type === "110m haies")!.points;
    }

    getPointsCourse1500(): number {
        return this._course.find((course) => course.type === "1500m")!.points;
    }

    getPointsLancerPoids(): number {
        return this._lancer.find((lancer) => lancer.type === "poids")!.points;
    }
    getPointsLancerDisque(): number {
        return this._lancer.find((lancer) => lancer.type === "disque")!.points;
    }
    getPointsLancerJavelot(): number {
        return this._lancer.find((lancer) => lancer.type === "javelot")!.points;
    }
}
