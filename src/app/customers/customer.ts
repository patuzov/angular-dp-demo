export interface User {
    id: string;
    login: string;
    site_admin: boolean;
}

export class UserDto {
    constructor(user: User) {
        this.id = user.id;
        this.username = user.login;
        this.isAdmin = user.site_admin;
    }

    id: string;
    username: string;
    isAdmin: boolean;
}