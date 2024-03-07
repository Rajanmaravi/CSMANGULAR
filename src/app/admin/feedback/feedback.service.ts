import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FeedbackByRaCode } from '../../_dto/reporting-dao.model';

@Injectable({
  providedIn: 'root'
})
export class FeedbackService {

  private rootUrl = 'https://localhost:7152';

  constructor(private http:HttpClient) { }

  sendFeedbackEmail(feedbackData: any): Observable<any> {
    debugger;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    //let userCode : string | null = localStorage.getItem('userCode');
   // let loggedInUser: string = userCode || '';
    
    console.log('Feedback Email Service data:',feedbackData);

    return this.http.post(`${this.rootUrl}/api/FeedbackLink/Create`, feedbackData, {
      headers: headers,
      responseType: 'text' 
    });
  }

  GetMapRAJseUserCode(empCode:any):Observable<any>{
    debugger;
    return this.http.get<any>(`${this.rootUrl}/api/Feedback/GetMapRAInternsByCode/${empCode}`);
  }

  getAspects():Observable<any>{
    debugger;
    return this.http.get<any>(`${this.rootUrl}/api/Feedback/GetAspect`);
  }

  createRAFeedback(feedbackData: any): Observable<any> {
    debugger;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    
    console.log('Feedback Email Service data:',feedbackData);

    return this.http.post(`${this.rootUrl}/api/RAFeedback/Create`, feedbackData, {
      headers: headers,
      responseType: 'text' 
    });
  }

  getRAFeedbackData():Observable<any>{
    debugger;
    return this.http.get<any>(`${this.rootUrl}/api/RAFeedback/GetRAFeedback`);
  }

  getRAFeedbackByRaCode(raCode: any): Observable<any> {
    debugger;
    
    console.log('Feedback RA Service data:',raCode);
    //const body = { raCode: raCode };
    return this.http.get<any>(`${this.rootUrl}/api/RAFeedback/GetFeedbackByRaCode/${raCode}`);
  }

  getRARatingFeedback(data: FeedbackByRaCode): Observable<any> {
    debugger;
    return this.http.post<any>(`${this.rootUrl}/api/RAFeedback/GetRAFeedback`,data);
  }

  
}
