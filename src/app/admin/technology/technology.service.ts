import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Technology } from '../../_dto/technology-dao.model';

@Injectable({
  providedIn: 'root'
})
export class TechnologyService {
  private rootUrl = 'https://localhost:7152';

  constructor(private http:HttpClient) { }

  getTechnology():Observable<any>{
    debugger;
    return this.http.get<any>(`${this.rootUrl}/api/Technology/GetTechnology`);
  }

  CreateTechnology(techModel: any): Observable<any> {
    debugger;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let userCode = localStorage.getItem('userCode');
    let post: Technology = {
      isActive: true,
      loggedInUser: userCode,
      technologyCode: techModel.technologyCode,
      technologyName: techModel.technologyName,
    }

    return this.http.post(`${this.rootUrl}/api/Technology/Create`, post, {
      headers: headers,
      responseType: 'text' 
    });
  }


  deleteTechnology(data: any): Observable<any> {
    debugger
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let userCode = localStorage.getItem('userCode');
    const requestData: Technology = {
      isActive: data.isActive,
      loggedInUser: userCode,
      technologyCode: data.technologyCode,
      technologyName: data.technologyName,
    };

    return this.http.post(`${this.rootUrl}/api/Technology/Delete`, requestData, {
      headers: headers,
      responseType: 'text' 
    });
  }

  updateTechnology(tech: Technology): Observable<any> {
    debugger
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let userCode = localStorage.getItem('userCode');
    debugger;
    let updateTech : Technology = {
      technologyCode: tech.technologyCode,
      technologyName: tech.technologyName,
      isActive: tech.isActive,
      loggedInUser: userCode
    }
    return this.http.post(`${this.rootUrl}/api/Technology/Update`, updateTech, {
      headers: headers,
      responseType: 'text' 
    });
  }
  
}
