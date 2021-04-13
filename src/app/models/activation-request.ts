export class ActivationRequest{
    matricule: string;
    periode: string;
    telephone: string;

    constructor(matricule: string, periode: string, telephone: string){
        this.matricule = matricule;
        this.periode = periode;
        this.telephone = telephone;
    }
}