import { Role } from "../enums/role";
import { UserInfo } from "./user-info";

export class User{
    id: number;
    username: string;
    email: string;
    createdDate: Date;
    role: Role;
    token: string;
    userInfo: UserInfo;

    constructor(id: number, username:string, email: string, createdDate: Date, token: string, role: Role){
        this.id = id;
        this.username = username;
        this.email = email;
        this.createdDate = createdDate;
        this.role = role;
        this.token = token;
    }
}