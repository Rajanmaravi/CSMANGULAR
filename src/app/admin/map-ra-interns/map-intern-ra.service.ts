import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MapJseToRaUpdate } from '../../_dto/reporting-dao.model';
import { JseUserRAMap, JseUserRAMapDto } from '../../_dto/intern-dao.model';

@Injectable({
  providedIn: 'root'
})
export class MapInternRaService {

  private rootUrl = 'https://localhost:7152';

  constructor(private http:HttpClient) { }

  MapRAIntern(marRA: any): Observable<any> {
    debugger;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let userCode : string | null = localStorage.getItem('userCode');
    let loggedInUser: string = userCode || '';
    let data:JseUserRAMap = {
      isActive: true,
      loggedInUser: loggedInUser,
      employeeCode: marRA.employeeCode,
      firstName: marRA.firstName,
      middleName: marRA.middleName,
      lastName: marRA.lastName,
      email: marRA.email,
      mobile: marRA.mobile,
      raCode: marRA.raCode,
      raEmail: marRA.raEmail,
      batchId: marRA.batchId,
      technologyId: marRA.technologyId
    }
    console.log(data);
    return this.http.post(`${this.rootUrl}/api/ReportingAuthority/MapRAIntern`, data, {
      headers: headers,
      responseType: 'text' 
    });
  }

  getMapRAJseUser():Observable<any>{
    debugger;
    return this.http.get<any>(`${this.rootUrl}/api/ReportingAuthority/GetMapRAIntern`);
  }

  deleteMapRAJse(data: any): Observable<any> {
    debugger
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let userCode : string | null = localStorage.getItem('userCode');
    let loggedInUser: string = userCode || '';
    const requestData: JseUserRAMapDto = {
      employeeCode: data.employeeCode,
      firstName: data.firstName,
      middleName: data.middleName,
      lastName: data.lastName,
      email: data.email,
      mobile: data.mobile,
      raCode: data.raCode,
      raEmail: data.raEmail,
      batchId: data.batchId,
      technologyId: data.technologyId,
      isActive: data.isActive,
      loggedInUser: loggedInUser,
      id: data.id
    };

    return this.http.post(`${this.rootUrl}/api/ReportingAuthority/MapRADelete`, requestData, {
      headers: headers,
      responseType: 'text' 
    });
  }


  updateMapRAJseUserDetails(jseMapRa: any): Observable<any> {
    debugger
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    const userCode: string | null = localStorage.getItem('userCode');
    const loggedInUser: string = userCode || '';
  
    const updateMapRaJseUser: MapJseToRaUpdate = {
      id: jseMapRa.id,
      employeeCode: jseMapRa.employeeCode,
      firstName: jseMapRa.firstName,
      middleName: jseMapRa.middleName,
      lastName: jseMapRa.lastName,
      email: jseMapRa.email,
      mobile: jseMapRa.mobile,
      raCode: jseMapRa.raCode,
      raEmail: jseMapRa.raEmail,
      batchId: jseMapRa.batchId,
      technologyId: jseMapRa.technologyId,
      isActive: true,
      loggedInUser: loggedInUser
    };
  
    return this.http.post(`${this.rootUrl}/api/ReportingAuthority/MapRAUpdat`, updateMapRaJseUser, {
      headers: headers,
      responseType: 'text'
    });
  }

  
}
