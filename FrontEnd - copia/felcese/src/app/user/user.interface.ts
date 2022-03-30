
export type Roles = 'ADMIN | USER'

export interface User {
    username: string;
    password: string;
}

export interface UserResponse{

    message: string;

    token: string;

    userId: string;

    role: Roles;

}