export class CreateJseUser {
  isActive: boolean = false;
  loggedInUser: string | null =null;
  employeeCode: string | null =null;
  firstName: string | null =null;
  middleName: string | null =null;
  lastName: string | null =null;
  email: string | null =null;
  mobile: string | null =null;
  // raCode: string | null =null;
  // raEmail: string | null =null;
  pmCode: string | null =null;
  pmEmail: string | null =null;
  location: string | null =null;
  projectName: string | null =null;
  batchId: number = 0;
  technologyId: number = 0;
}


export class JseUser {
    id:number = 0;
    isActive: boolean = false;
    loggedInUser: string | null =null;
    employeeCode: string | null =null;
    firstName: string | null =null;
    middleName: string | null =null;
    lastName: string | null =null;
    email: string | null =null;
    mobile: string | null =null;
    // raCode: string | null =null;
    // raEmail: string | null =null;
    pmCode: string | null =null;
    pmEmail: string | null =null;
    location: string | null =null;
    projectName: string | null =null;
    batchId: number = 0;
    technologyId: number = 0;
  }

  export interface Technology {
    id: number;
    technologyName: string;
  }

  export interface Batch {
     id: number;
     batchName: string;
  }

  export interface RA {
    raCode: string;
    raName: string;
    raEmail: string;
  }

  export interface JseUserDetails {
       id:number;
       employeeCode :string;
       firstName:string;
       middleName:string;
       lastName:string;
       email:string;
	     mobile:string;
       raCode:string;
       raName:string;
       raPhone:string;
       raEmail:string;
       pmCode:string;
       pmEmail:string;
       location:string;	
	     batchId:number;
       batchCode:string;
       batchName:string;
       month:string;
       year:string;
       technologyId:number;
       technologyCode:string;
       technologyName:string
	     projectName:string;
       isActive:boolean;
	     isDeleted:boolean;
       createdOn:Date;
       modifiedOn:Date;
       createdBy:string;
       modifiedBy:string;
       loggedInUser:string;
       empFullName:string;
  }

  export interface JseUseModel{
    id:number;
    employeeCode:string;
    firstName:string;
    middleName:string;  
    lastName:string;
    email:string;
    mobile:string;
    // raCode:string;
    // raEmail:string;
    pmCode:string;  
    pmEmail:string;
    location:string;
    projectName:string;
    batchId:string;
    technologyId:string;
    isActive:string;
    loggedInUser:string;
  }

  export class JseUserRAMap {
    isActive: boolean = false;
    loggedInUser: string | null =null;
    employeeCode: string | null =null;
    firstName: string | null =null;
    middleName: string | null =null;
    lastName: string | null =null;
    email: string | null =null;
    mobile: string | null =null;
    raCode: string | null =null;
    raEmail: string | null =null;
    batchId: number = 0;
    technologyId: number = 0;
  }

  export class JseUserRAMapDto {
    id:number=0;
    isActive: boolean = false;
    loggedInUser: string | null =null;
    employeeCode: string | null =null;
    firstName: string | null =null;
    middleName: string | null =null;
    lastName: string | null =null;
    email: string | null =null;
    mobile: string | null =null;
    raCode: string | null =null;
    raEmail: string | null =null;
    batchId: number = 0;
    technologyId: number = 0;
  }
  