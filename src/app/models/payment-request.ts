export class PaymentRequest{
    description: string;
    montant: string;
    taux: number;
    devise: string;
    periode: string;
    telephone: string;
    matricule: string;

    constructor(description: string, montant: string, taux: number, devise: string, 
        periode: string, telephone: string, matricule: string){
            this.description = description;
            this.montant = montant;
            this.taux = taux;
            this.devise = devise;
            this.periode = periode;
            this.telephone = telephone;
            this.matricule = matricule;
        }
}