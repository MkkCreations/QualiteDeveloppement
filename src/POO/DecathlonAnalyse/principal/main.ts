import { Decathlon } from "../model/Decathlon";
import { Athlete } from "../model/Athlete";
import { Course } from "../model/Course";
import { Saut } from "../model/Saut";
import { Lancer } from "../model/Lancer";
import { Resultat } from "../model/Resultat";
import { Classement } from "../model/Classement";


let decathlon = new Decathlon();

let p = new Athlete("Jean", "FR", "H");
let p1 = new Athlete("Hola", "FR", "H");
let p2 = new Athlete("Saha", "FR", "H");
let p3 = new Athlete("Roho", "FR", "H");
let p4 = new Athlete("Tuhu", "ES", "H");
let p5 = new Athlete("Suuu", "ES", "H");
let p6 = new Athlete("Popo", "ES", "H");
let p7 = new Athlete("Momo", "ES", "H");

decathlon.addParticier(p, p1, p2, p3, p4, p5, p6, p7);

let res = new Resultat(p);
let res1 = new Resultat(p1);
let res2 = new Resultat(p2);

let clas = new Classement(decathlon);

res.addEpreuve(new Course("100m", 10.49));
res.addEpreuve(new Course("110m haies", 15.34));
res.addEpreuve(new Course("400m", 46.17));
res.addEpreuve(new Course("1500m", 240.28));
res.addEpreuve(new Saut("longueur", 7.62));
res.addEpreuve(new Saut("hauteur", 2.08));
res.addEpreuve(new Saut("perche", 4.57));
res.addEpreuve(new Lancer("poids", 16.43));
res.addEpreuve(new Lancer("disque", 49.14));
res.addEpreuve(new Lancer("javelot", 63.43));

res1.addEpreuve(new Course("100m", 10.8));
res1.addEpreuve(new Course("110m haies", 13.34));
res1.addEpreuve(new Course("400m", 42.17));
res1.addEpreuve(new Course("1500m", 267.28));
res1.addEpreuve(new Saut("longueur", 6.62));
res1.addEpreuve(new Saut("hauteur", 2.28));
res1.addEpreuve(new Saut("perche", 5.57));
res1.addEpreuve(new Lancer("poids", 14.43));
res1.addEpreuve(new Lancer("disque", 45.14));
res1.addEpreuve(new Lancer("javelot", 60.43));

res2.addEpreuve(new Course("100m", 11.49));
res2.addEpreuve(new Course("110m haies", 14.34));
res2.addEpreuve(new Course("400m", 43.17));
res2.addEpreuve(new Course("1500m", 250.28));
res2.addEpreuve(new Saut("longueur", 8.62));
res2.addEpreuve(new Saut("hauteur", 2.68));
res2.addEpreuve(new Saut("perche", 5.27));
res2.addEpreuve(new Lancer("poids", 15.43));
res2.addEpreuve(new Lancer("disque", 50.14));
res2.addEpreuve(new Lancer("javelot", 61.63));


clas.addResultat(res, res1, res2);

console.log(clas.bestCourse!.athlete);
/* console.log(clas.theBest);
console.log(decathlon.showAll()); */

/* p.addEpreuve(new Course("100m", 10.49), new Course("110m haies", 15.34), new Course("400m", 46.17), new Course("1500m", 240.28), new Saut("longueur", 7.62), new Saut("hauteur", 2.08), new Saut("perche", 4.57), new Lancer("poids", 16.43), new Lancer("disque", 49.14), new Lancer("javelot", 63.43));

p1.addEpreuve(new Course("100m", 10.8), new Course("110m haies", 13.34), new Course("400m", 42.17), new Course("1500m", 267.28), new Saut("longueur", 6.62), new Saut("hauteur", 2.28), new Saut("perche", 5.57), new Lancer("poids", 14.43), new Lancer("disque", 45.14), new Lancer("javelot", 60.43));

p2.addEpreuve(new Course("100m", 11.49), new Course("110m haies", 14.34), new Course("400m", 43.17), new Course("1500m", 250.28), new Saut("longueur", 8.62), new Saut("hauteur", 2.68), new Saut("perche", 5.27), new Lancer("poids", 15.43), new Lancer("disque", 50.14), new Lancer("javelot", 61.63));

p3.addEpreuve(new Course("100m", 10.21), new Course("110m haies", 17.34), new Course("400m", 41.37), new Course("1500m", 255.28), new Saut("longueur", 6.82), new Saut("hauteur", 1.98), new Saut("perche", 5.97), new Lancer("poids", 13.43), new Lancer("disque", 47.54), new Lancer("javelot", 62.93));

p4.addEpreuve(new Course("100m", 10.56), new Course("110m haies", 15.88), new Course("400m", 47.98), new Course("1500m", 270.68), new Saut("longueur", 6.92), new Saut("hauteur", 3.48), new Saut("perche", 5.07), new Lancer("poids", 17.01), new Lancer("disque", 46.04), new Lancer("javelot", 64.03));


p5.addEpreuve(new Course("100m", 9.99), new Course("110m haies", 13.93), new Course("400m", 44.13), new Course("1500m", 256.28), new Saut("longueur", 6.6), new Saut("hauteur", 2.98), new Saut("perche", 5.5), new Lancer("poids", 16.43), new Lancer("disque", 53.14), new Lancer("javelot", 65.03));


p6.addEpreuve(new Course("100m", 10.49), new Course("110m haies", 13.34), new Course("400m", 42.17), new Course("1500m", 267.28), new Saut("longueur", 6.62), new Saut("hauteur", 2.28), new Saut("perche", 5.57), new Lancer("poids", 14.43), new Lancer("disque", 45.14), new Lancer("javelot", 60.43));

p7.addEpreuve(new Course("100m", 10.39), new Course("110m haies", 13.81), new Course("400m", 46.17), new Course("1500m", 233.79), new Saut("longueur", 7.76), new Saut("hauteur", 2.21), new Saut("perche", 5.29), new Lancer("poids", 18.40), new Lancer("disque", 56.18), new Lancer("javelot", 77.20));


decathlon.showAll();
console.log(decathlon.theBestCountry("FR")!.name); */

