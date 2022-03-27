
export type Roles = 'ADMIN | USER'

export interface UserResponse{

    message: string;

    token: string;

    userId: string;

    role: Roles;

}