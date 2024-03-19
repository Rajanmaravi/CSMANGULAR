
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
    email:string|undefined;
}

export interface LoginRequest {
  userName: string;
  password: string;
}

export interface OTPDaoModel{
     employeeCode:string;
     email:string;
     otp:string;
     password:string;
     otpExpiration:Date;
}

export interface OTDDaoDetailsModel{
        employeeCode:string;
        email:string;
        firstName:string;
        lastName:string;
        middleName:string;
        roleId:string;
        userRole:string;
        isActive:boolean;
        isDeleted:boolean;
        createdBy:string;
        modifiedBy:string;
        createdOn:Date;
        modifiedOn:Date;
        otpExpiration:Date;
        otp:string;
}
