import { Clientel, Client } from "../model/Client";

const clientel = new Clientel();
const cli = new Client("Khaffou", "Moha");
const cli1 = new Client("Khaffou", "Mohamed", 2000);
const cli2 = new Client("Khaffou", "Moha");

clientel.addClient(cli);
clientel.addClient(cli1);
clientel.addClient(cli2);
clientel.addAff(cli1, 1000);
clientel.addAff(cli2, 120);
clientel.addAff(cli2, 10000);

console.log(clientel.clients);
