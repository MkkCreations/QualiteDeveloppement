export class Clientel {
    private clients_: Array<Client | ClientVIP> = [];

    get clients(): Array<Client | ClientVIP> {
        return this.clients_;
    }

    addClient(client: Client | ClientVIP): void {
        this.clients_.push(client);
        this.updateClients();
    }
    showClient(nom: string): void {
        console.log(this.clients_.find((cli) => cli.nom === nom));
    }
    addAff(cli: Client | ClientVIP, n: number): void {
        cli.addAffaire(n);
        if (cli.affaires >= 1000) this.updateOneClient(cli);
    }
    private updateOneClient(cli: Client | ClientVIP): void {
        this.clients_.splice(
            [this.clients_.indexOf(cli)][0],
            1,
            new ClientVIP(cli.nom, cli.prenom, cli.affaires)
        );
    }
    private updateClients(): void {
        this.clients_.forEach((cli, i) => {
            if (cli.affaires >= 1000) {
                this.clients_[i] = new ClientVIP(cli.nom, cli.prenom, cli.affaires);
            }
        });
    }
}

export class Client {
    protected nom_: string;
    protected prenom_: string;
    protected nbAffaires_: number;

    constructor(nom: string, prenom: string, nbAff = 0) {
        this.nom_ = nom;
        this.prenom_ = prenom;
        this.nbAffaires_ = nbAff;
    }

    get nom(): string {
        return this.nom_;
    }
    get prenom(): string {
        return this.prenom_;
    }
    get affaires(): number {
        return this.nbAffaires_;
    }

    addAffaire(n: number): void {
        this.nbAffaires_ += n;
    }
}

export class ClientVIP extends Client {
    private remis_: number;
    private typeClient_: string;

    constructor(nom: string, prenom: string, nbAff = 0) {
        super(nom, prenom, nbAff);
        if (nbAff > 10000) {
            this.remis_ = 30;
            this.typeClient_ = "V.I.C";
        } else if (3000 < nbAff && nbAff <= 10000) {
            this.remis_ = 15;
            this.typeClient_ = "Client Exceptionnel ";
        } else if (nbAff <= 3000) {
            this.remis_ = 5;
            this.typeClient_ = "Bon Client";
        }
    }
}
