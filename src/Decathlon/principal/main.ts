import { readFileSync } from "fs";
import { writeFileSync } from "fs";
import { Decathlon } from "../model/Decathlon";
import { Sportif } from "../model/Sportif";
import { Course } from "../model/Course";
import { Saut } from "../model/Saut";
import { Lancer } from "../model/Lancer";

/* readFileSync(
    "/Users/mohakk/Desktop/TypeScript/QualiteDeveloppement/src/Decathlon/principal/data.txt",
    { encoding: "utf-8", flag: "r" }
); */

let decathlon = new Decathlon();
let p = new Sportif("Jean", "FR", "H");
let p1 = new Sportif("Hola", "FR", "H");
let p2 = new Sportif("Saha", "FR", "H");
let p3 = new Sportif("Roho", "FR", "H");
let p4 = new Sportif("Tuhu", "ES", "H");
let p5 = new Sportif("Suuu", "ES", "H");
let p6 = new Sportif("Popo", "ES", "H");

decathlon.addParticier(p);
decathlon.addParticier(p1);
decathlon.addParticier(p2);
decathlon.addParticier(p3);
decathlon.addParticier(p4);
decathlon.addParticier(p5);
decathlon.addParticier(p6);

p.addCourse(new Course("100m", 10.49));
p.addCourse(new Course("110m haies", 15.34));
p.addCourse(new Course("400m", 46.17));
p.addCourse(new Course("1500m", 240.28));
p.addSaut(new Saut("longueur", 7.62));
p.addSaut(new Saut("hauteur", 2.08));
p.addSaut(new Saut("perche", 4.57));
p.addLancer(new Lancer("poids", 16.43));
p.addLancer(new Lancer("disque", 49.14));
p.addLancer(new Lancer("javelot", 63.43));

p1.addCourse(new Course("100m", 10.8));
p1.addCourse(new Course("110m haies", 13.34));
p1.addCourse(new Course("400m", 42.17));
p1.addCourse(new Course("1500m", 267.28));
p1.addSaut(new Saut("longueur", 6.62));
p1.addSaut(new Saut("hauteur", 2.28));
p1.addSaut(new Saut("perche", 5.57));
p1.addLancer(new Lancer("poids", 14.43));
p1.addLancer(new Lancer("disque", 45.14));
p1.addLancer(new Lancer("javelot", 60.43));

p2.addCourse(new Course("100m", 11.49));
p2.addCourse(new Course("110m haies", 14.34));
p2.addCourse(new Course("400m", 43.17));
p2.addCourse(new Course("1500m", 250.28));
p2.addSaut(new Saut("longueur", 8.62));
p2.addSaut(new Saut("hauteur", 2.68));
p2.addSaut(new Saut("perche", 5.27));
p2.addLancer(new Lancer("poids", 15.43));
p2.addLancer(new Lancer("disque", 50.14));
p2.addLancer(new Lancer("javelot", 61.63));

p3.addCourse(new Course("100m", 10.21));
p3.addCourse(new Course("110m haies", 17.34));
p3.addCourse(new Course("400m", 41.37));
p3.addCourse(new Course("1500m", 255.28));
p3.addSaut(new Saut("longueur", 6.82));
p3.addSaut(new Saut("hauteur", 1.98));
p3.addSaut(new Saut("perche", 5.97));
p3.addLancer(new Lancer("poids", 13.43));
p3.addLancer(new Lancer("disque", 47.54));
p3.addLancer(new Lancer("javelot", 62.93));

p4.addCourse(new Course("100m", 10.56));
p4.addCourse(new Course("110m haies", 15.88));
p4.addCourse(new Course("400m", 47.98));
p4.addCourse(new Course("1500m", 270.68));
p4.addSaut(new Saut("longueur", 6.92));
p4.addSaut(new Saut("hauteur", 3.48));
p4.addSaut(new Saut("perche", 5.07));
p4.addLancer(new Lancer("poids", 17.01));
p4.addLancer(new Lancer("disque", 46.04));
p4.addLancer(new Lancer("javelot", 64.03));

p5.addCourse(new Course("100m", 9.99));
p5.addCourse(new Course("110m haies", 13.93));
p5.addCourse(new Course("400m", 44.13));
p5.addCourse(new Course("1500m", 256.28));
p5.addSaut(new Saut("longueur", 6.6));
p5.addSaut(new Saut("hauteur", 2.98));
p5.addSaut(new Saut("perche", 5.5));
p5.addLancer(new Lancer("poids", 16.43));
p5.addLancer(new Lancer("disque", 53.14));
p5.addLancer(new Lancer("javelot", 65.03));

p6.addCourse(new Course("100m", 10.0));
p6.addCourse(new Course("110m haies", 12.44));
p6.addCourse(new Course("400m", 41.18));
p6.addCourse(new Course("1500m", 235.78));
p6.addSaut(new Saut("longueur", 8.34));
p6.addSaut(new Saut("hauteur", 3.38));
p6.addSaut(new Saut("perche", 3.97));
p6.addLancer(new Lancer("poids", 14.93));
p6.addLancer(new Lancer("disque", 52.87));
p6.addLancer(new Lancer("javelot", 64.96));

/* console.log(decathlon.theBestCountry("ES"));
console.log(decathlon.theBestDecathlon()); */

decathlon.showAll();
