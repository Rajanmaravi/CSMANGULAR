import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RaFeedbackService {

  private rootUrl = 'https://localhost:7152';

  constructor(private http:HttpClient) { }

  // sendFeedbackEmail(feedbackData: any): Observable<any> {
  //   debugger;
  //   const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  //   //let userCode : string | null = localStorage.getItem('userCode');
  //  // let loggedInUser: string = userCode || '';
    
  //   console.log('Feedback Email Service data:',feedbackData);

  //   return this.http.post(`${this.rootUrl}/api/FeedbackLink/Create`, feedbackData, {
  //     headers: headers,
  //     responseType: 'text' 
  //   });
  // }

  GetJseUserByRaCode(raCode:any):Observable<any>{
    debugger;
    return this.http.get<any>(`${this.rootUrl}/api/ReportingAuthority/GetMapInternByRACode/${raCode}`);
  }
  
}
