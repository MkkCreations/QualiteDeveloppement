import { PorteFeuille } from "../model/Portefeuille";
import * as readlineSync from "readline-sync";

function main(): void {
    const pf = new PorteFeuille();
    /*  pf.ajouter("euro", 40);
    pf.ajouter("dolar", 800);
    pf.sortir("dolar", 300);
    pf.ajouter("pound", 25);
    pf.afficher();
    pf.sortir("hola", 50); */

    let stop = false;

    while (stop === false) {
        let input = Number(
            readlineSync.question("\nAjouter: 1 \nSortir: 2\nAfficher: 3\nPour arreter 4\n")
        );
        if (input === 1) {
            let devise = readlineSync.question("Nom Devise: ");
            let montant = Number(readlineSync.question("Montant: "));
            pf.ajouter(devise, montant);
            pf.afficher();
        } else if (input === 2) {
            let devise = readlineSync.question("Nom Devise: ");
            let montant = Number(readlineSync.question("Montant: "));
            pf.sortir(devise, montant);
            pf.afficher();
        } else if (input === 3) {
            pf.afficher();
        } else {
            stop = true;
        }
    }
}
main();
