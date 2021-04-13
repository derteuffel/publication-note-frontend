import { Niveau } from "../enums/niveau-enum";
import { Sexe } from "../enums/sexe-enum";


export class UserInfo{
    id: number;
    name: string;
    firstName: string;
    lastName: string;
    niveau: Niveau;
    email: string;
    telephone: string;
    birthdate: string;
    adressePhysique: string;
    institution: string;
    numIdentite: string;
    sexe: Sexe;
    matricule: string;
    account: boolean;
    minervalles: boolean;
    enrollementPremiereSession: boolean;
    enrollementMiSession: boolean;
    enrollementdeuxiemeSession: boolean;

    constructor(id: number, name: string, firstName: string, lastName: string, niveau: Niveau,
        email: string, telephone: string, birthdate: string, adressePhysique: string, institution: string,
        numIdentite: string, sexe: Sexe, matricule: string){
            this.name = name;
            this.firstName = firstName;
            this.lastName = lastName;
            this.niveau = niveau;
            this.email = email;
            this.telephone = telephone;
            this.birthdate = birthdate;
            this.adressePhysique = adressePhysique;
            this.institution = institution;
            this.numIdentite = numIdentite;
            this.sexe = sexe;
            this.matricule = matricule;
        }
}