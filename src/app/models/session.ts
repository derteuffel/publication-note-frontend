import { Niveau } from "../enums/niveau-enum";
import { Periodes } from "../enums/periode-enum";

export class Session{
    id: number;
    name:Periodes;
    sessionDate: string;
    percentage: number;
    uvLostNumber: number;
    decision: string;
    total: number;
    niveau: Niveau;
    
}