export interface AssementDao{
    id:number;
    assementName:string;
    isActive:boolean;
    isDeleted:boolean;
    createdBy:string;
    createdOn:Date;
    modifiedBY:string;
    modifiedOn:Date;
}

export interface AssessmentBTDeo{
    batchId:number
    technologyId:number;
}

export interface AssessmentJseDao{
    employeeCode:string
    firstName:string
    fullMark:number;
    securedMark:number;
    isAbsent:boolean;
    technologyName:string;
    description:string;
}

export interface AssessmentFormData {
    batchId: number;
    technologyId: number;
    assessmentId: number;
    assessmentDate: Date;
    description: string;
    loggedInUser:string;
    jseDaoModels: AssessmentJseDao[];
  }

  export interface ASendReportRequest{
    batchId:number;
    technologyId:number;
    assessmentId:number;
    employeeCode:string;
  }

  export interface AssessmentReportDetails{
        employeeCode:string;
        firstName:string;
        middleName:string;
        lastName:string;
        email:string;
        mobile:string;
        fullMark:string;
        securedMark:string;
        isAbsent:boolean;
        technologyName:string;
        batchName:string;
        batchCode:string;
        assessmentDate:Date;
        description:string;
  }
  
