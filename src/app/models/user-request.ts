export class UserRequest{
    name: string;
    firstName: string;
    lastName: string;
    email: string;
    matricule: string;
    telephone: string;
    numIdentite: string;
    birthDate: string;
    adressePhysique: string;
    sexe: string;
    fonction: string;
    roles: string[];

    constructor(name: string, firstName: string, lastName: string, email: string, 
        matricule: string, telephone: string, numIdentite: string, birthdate: string,
        adressePhysique: string, sexe: string, fonction: string, roles: string[]){
            this.name = name;
            this.firstName = firstName;
            this.lastName = lastName;
            this.email = email;
            this.matricule = matricule;
            this.telephone = telephone;
            this.numIdentite = numIdentite;
            this.birthDate = birthdate;
            this.adressePhysique = adressePhysique;
            this.sexe = sexe;
            this.fonction = fonction;
            this.roles = roles;
        }
}