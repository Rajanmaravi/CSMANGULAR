export interface raDto {
    raCode:string       
    raName:string      
    raEmail:string
    raPhone:string
    isActive:boolean
    loggedInUser:string
}

export interface Reporting {
    id: number;
    raCode:string       
    raName:string      
    raEmail:string
    raPhone:string
    isActive:boolean
    loggedInUser:string
  }


  export interface JseRAMapDaoDetailsModel
  {
    id:number
    employeeCode:string
    firstName:string
    middleName:string
    lastName:string
    email:string
    mobile:string
    raCode:string
    raEmail:string
    batchId:number
    technologyId:number
    isActive:boolean
    isDeleted:boolean
    createdOn:Date
    createdBy:string
    modifiedOn:Date
    modifiedBy:string
    raName:string
    batchName:string
    technologyName:string
    batchCode:string
    technologyCode:string
  }

  export interface JseUserMapRADto {
    id:number;
    employeeCode :string;
    firstName:string;
    middleName:string;
    lastName:string;
    email:string;
    mobile:string;
    raCode:string;
    raName:string;
    raEmail:string;
    batchId:number;
    batchCode:string;
    batchName:string;
    technologyId:number;
    technologyCode:string;
    technologyName:string
    isActive:boolean;
    isDeleted:boolean;
    createdOn:Date;
    modifiedOn:Date;
    createdBy:string;
    modifiedBy:string;
    loggedInUser:string;
}

export interface MapJseToRaUpdate {
  id:number
  employeeCode:string
  firstName:string
  middleName:string
  lastName:string
  email:string
  mobile:string 
  raCode:string  
  raEmail:string  
  batchId:number
  technologyId:number
  isActive:boolean
  loggedInUser:string
}

export class UserFeedback {
  raCode:string;
  employeeCode: string;
  isLogger: string;
  aspectRatings: { [key: number]: number };  // Define 'aspectRatings' property

  constructor(data: {raCode:string; employeeCode: string; isLogger: string; aspectRatings: { [key: number]: number } }) {
    this.employeeCode = data.employeeCode;
    this.raCode = data.raCode;
    this.isLogger = data.isLogger;
    this.aspectRatings = data.aspectRatings;
  }

}

export interface FeedbackByRaCode{
  projectName:string;
  mobile:string;
  firstName:string;
  middleName:string;
  lastName:string;
  employeeCode:string;
  raCode:string;
  raName:string;
  totalRating:string;
}

export interface FeedbackData{
  employeeCode:string;
  feedbackId:number;
  feedbackName:string;
  firstName:string;
  lastName:string;
  middleName:string;
  raCode:string;
  raName:string;
  rating:string;
}
