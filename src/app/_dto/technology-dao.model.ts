export interface TechnologyDao {
    id: number;
    technologyName: string;
    isActive: boolean;
    isDeleted: boolean;
    createdOn: Date;
    modifiedOn: Date;
    createdBy: string;
    modifiedBy: string | null;
    technologyCode: string;
}

export interface Technology {
    isActive: boolean;
    loggedInUser: string|null;
    technologyCode: string;
    technologyName: string;
  }

