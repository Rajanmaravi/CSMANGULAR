import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { OffBoardingJse } from '../../_dto/intern-dao.model';
import { ASendReportRequest } from '../../_dto/assessment-dao.model';

@Injectable({
  providedIn: 'root'
})
export class OffBoardService {

  private rootUrl = 'https://localhost:7152';

  constructor(private http:HttpClient) { }

  createOffBoarding(boarding: any): Observable<any> {
    debugger;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let userCode : string | null = localStorage.getItem('userCode');
    let loggedInUser: string = userCode || '';
    let data:OffBoardingJse = {
      id: 0,
      jseId: boarding.jseId,
      dol: boarding.dol,
      leavingReason: boarding.leavingReason,
      loggedInUser: loggedInUser
    }
    console.log(data);
    return this.http.post(`${this.rootUrl}/api/OffBoarding/Create`, data, {
      headers: headers,
      responseType: 'text' 
    });
  }

  getOffBoardJseUser():Observable<any>{
    debugger;
    return this.http.get<any>(`${this.rootUrl}/api/OffBoarding/GetOffBoardJse`);
  }

  getOffBoard(data:any){

    let post: ASendReportRequest = {
      batchId: data.batchId,
      technologyId: data.technologyId,
      assessmentId: 0,
      employeeCode: ''
    }
    return this.http.post<any>(`${this.rootUrl}/api/offBoarding/GetOffBoardReport`, post);

  }
}
