import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { raDto } from '../../_dto/reporting-dao.model';

@Injectable({
  providedIn: 'root'
})
export class JseRaService {

  private rootUrl = 'https://localhost:7152';

  constructor(private http:HttpClient) { }

   CreateReportingAuthority(raModel: any): Observable<any> {
    debugger;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let userCode : string | null = localStorage.getItem('userCode');
    let loggedInUser: string = userCode || '';
    let post: raDto = {
      raCode: raModel.raCode,
      raName: raModel.raName,
      raEmail: raModel.raEmail,
      raPhone: raModel.raPhone,
      isActive: true,
      loggedInUser: loggedInUser,
    }

    return this.http.post(`${this.rootUrl}/api/ReportingAuthority/Create`, post, {
      headers: headers,
      responseType: 'text' 
    });
  }


  updateRAData(raModel: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let userCode : string | null = localStorage.getItem('userCode');
    let loggedInUser: string = userCode || '';
    debugger;
    let updateRA : raDto = {
      raCode: raModel.raCode,
      raName: raModel.raName,
      raEmail: raModel.raEmail,
      raPhone: raModel.raPhone,
      isActive: true,
      loggedInUser: loggedInUser
    }
    return this.http.post(`${this.rootUrl}/api/ReportingAuthority/Update`, updateRA, {
      headers: headers,
      responseType: 'text' 
    });
  }

  deleteReporting(data: any): Observable<any> {
    debugger
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let userCode = localStorage.getItem('userCode');
    const requestData = {
      raCode: data.raCode,
      raName: data.raName,
      raEmail: data.raEmail,
      raPhone: data.raPhone,
      isActive: false,
      loggedInUser: userCode,
    };

    return this.http.post(`${this.rootUrl}/api/ReportingAuthority/Delete`, requestData, {
      headers: headers,
      responseType: 'text' 
    });
  }

  getRaList():Observable<any>{
    return this.http.get(`${this.rootUrl}/api/ReportingAuthority/GetReportingAuthority`);
  }
}
