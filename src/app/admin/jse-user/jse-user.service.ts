import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JseUser , JseUseModel, CreateJseUser } from '../../_dto/intern-dao.model';

@Injectable({
  providedIn: 'root'
})
export class JseUserService {

  private rootUrl = 'https://localhost:7152';

  constructor(private http:HttpClient) { }

   CreateIntern(internModel: any): Observable<any> {
    debugger;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let userCode : string | null = localStorage.getItem('userCode');
    let loggedInUser: string = userCode || '';
    let data:CreateJseUser = {
      isActive: true,
      loggedInUser: loggedInUser,
      employeeCode: internModel.employeeCode,
      firstName: internModel.firstName,
      middleName: internModel.middleName,
      lastName: internModel.lastName,
      email: internModel.email,
      mobile: internModel.mobile,
      // raCode: internModel.raCode,
      // raEmail: internModel.raEmail,
      pmCode: internModel.pmCode,
      pmEmail: internModel.pmEmail,
      location: internModel.location,
      projectName: internModel.projectName,
      batchId: internModel.batchId,
      technologyId: internModel.technologyId
    }
    console.log(data);
    return this.http.post(`${this.rootUrl}/api/JseUser/Create`, data, {
      headers: headers,
      responseType: 'text' 
    });
  }

  getJseUserDetails():Observable<any>{
    debugger;
    return this.http.get<any>(`${this.rootUrl}/api/JseUser/GetMapRAInterns`);
  }

  deleteJseUser(data: any): Observable<any> {
    debugger
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let userCode : string | null = localStorage.getItem('userCode');
    let loggedInUser: string = userCode || '';
    const requestData: JseUseModel = {
      id:data.id,
      employeeCode: data.employeeCode,
      firstName: data.firstName,
      middleName: data.middleName,
      lastName: data.lastName,
      email: data.email,
      mobile: data.mobile,
      // raCode: data.raCode,
      // raEmail: data.raEmail,
      pmCode: data.pmCode,
      pmEmail: data.pmEmail,
      location: data.location,
      projectName: data.projectName,
      batchId: data.batchId,
      technologyId: data.technologyId,
      isActive: data.isActive,
      loggedInUser: loggedInUser
    };

    return this.http.post(`${this.rootUrl}/api/JseUser/Delete`, requestData, {
      headers: headers,
      responseType: 'text' 
    });
  }

  updateJseUserDetails(jse:any): Observable<any> {
    debugger
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let userCode : string | null = localStorage.getItem('userCode');
    let loggedInUser: string = userCode || '';
    debugger;
    let updateJse : JseUseModel = {
      id:jse.id,
      employeeCode: jse.employeeCode,
      firstName: jse.firstName,
      middleName: jse.middleName,
      lastName: jse.lastName,
      email: jse.email,
      mobile: jse.mobile,
      // raCode: jse.raCode,
      // raEmail: jse.raEmail,
      pmCode: jse.pmCode,
      pmEmail: jse.pmEmail,
      location: jse.location,
      projectName: jse.projectName,
      batchId: jse.batchId,
      technologyId: jse.technologyId,
      isActive: jse.isActive,
      loggedInUser: loggedInUser
    }
    return this.http.post(`${this.rootUrl}/api/JseUser/Update`, updateJse, {
      headers: headers,
      responseType: 'text' 
    });
  }

  uploadJseFile(selectedFile: File): Observable<any> {
      const formData = new FormData();
      formData.append('formFile', selectedFile);

      return this.http.post<any>(`${this.rootUrl}/api/JseUser/UploadJseUser`, formData);
   }

  
}
