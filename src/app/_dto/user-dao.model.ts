
export class UserDaoModel  {
    isActive: true | undefined;
    loggedInUser: string | undefined;
    employeeCode: string | undefined;
    firstName: string | undefined;
    lastName: string | undefined;
    middleName?: string | null;
    refreshToken?: string | null;
    refreshTokenExpiresOn?: Date | null;
    password?: string | null;
    roleId: number | undefined;
    userRole: string | undefined;
 
}

export interface LoginRequest {
  userName: string;
  password: string;
}
