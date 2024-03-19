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

  getJseUser():Observable<any>{
    debugger;
    return this.http.get<any>(`${this.rootUrl}/api/JseUser/GetJseUser`);
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
    let updateJse : JseUser = {
      id:jse.id,
      employeeCode: jse.employeeCode,
      firstName: jse.firstName,
      middleName: jse.middleName,
      lastName: jse.lastName,
      email: jse.email,
      mobile: jse.mobile,
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
    debugger;
    // formData.append('loggedInUser', loggedInUser);
      const formData = new FormData();
      formData.append('formFile', selectedFile);
      let userCode : string | null = localStorage.getItem('userCode');
      let loggedInUser: string = userCode || '';


      return this.http.post<any>(`${this.rootUrl}/api/JseUser/UploadJseUser?loggedInUser=${loggedInUser}`, formData);
   }


   uploadJseExcellFile(selectedFile: File,batchName:string): Observable<any> {
    debugger;
      const formData = new FormData();
      formData.append('formFile', selectedFile);
      let userCode : string | null = localStorage.getItem('userCode');
      let loggedInUser: string = userCode || '';


      return this.http.post<any>(`${this.rootUrl}/api/JseUser/UploadJseUser?loggedInUser=${loggedInUser}&batchName=${batchName}`, formData);
   }
  
}
