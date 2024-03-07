export class BatchDaoModel
{
    batchCode: string | null = null;
    year: string | null = null;
    month: string | null = null;
    batchName: string | null = null;
    isActive: boolean = false;
    loggedInUser: string | null = null;
}

export interface BatchModel {
    batchCode: string ;
    year: string ;
    month: string ;
    batchName: string;
  }
  

export interface Batch {
    id: number;
    batchCode: string;
    batchName: string;
    year: string;
    month: string;
    isActive: boolean;
    loggedInUser: string;
  }

  export interface BatchSearchModel {
    batchCode?: string;
    year?: string;
    month?: string;
    batchName?: string;
  }
  
  