export class BaseDaoModel {
    isActive?: boolean | null;
    loggedInUser?: string | null;
  }

  export interface Aspect {
    id: number;
    aspectName: string;
    rating: number;
    isDeleted: boolean;
    createdOn:Date;
    modifiedOn:Date;
    createdBy:string;
     modifiedBy:string;
  }
