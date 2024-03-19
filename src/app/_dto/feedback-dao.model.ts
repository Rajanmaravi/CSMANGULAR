export class UserFeedbackDao {
    id: number = 0;
    employeeCode: string = '';
    raCode: string = '';
    raName: string = '';
    projectName: string = '';
    isActive: boolean = false;
    isDeleted: boolean = false;
    createdOn: Date = new Date();
    modifiedOn: Date = new Date();
    createdBy: string = '';
    modifiedBy: string = '';
    loggedInUser: string = '';
    empFullName: string = '';
    reviewerComments: string = '';
    rating:number=0;
    feedbackId:number=0;
  }