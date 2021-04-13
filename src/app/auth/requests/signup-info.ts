export class SignupInfo{
    name: string;
    username: string;
    email: string;
    roles: string[];
    password: string;

    constructor(name: string, username: string, password: string, email: string, roles: string[]) {
        this.name = name;
        this.email = email;
        this.username = username;
        this.password = password;
        this.roles = roles;
    }
}