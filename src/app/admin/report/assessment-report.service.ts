import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ASendReportRequest } from '../../_dto/assessment-dao.model';

@Injectable({
  providedIn: 'root'
})
export class AssessmentReportService {

 
  private rootUrl = 'https://localhost:7152/api'

  constructor(
    private http:HttpClient,
  ) { }

  getAssessmentReport(data:any):Observable<any>{
     debugger;
    let post: ASendReportRequest ={
      batchId: data.batchId,
      technologyId: data.technologyId,
      assessmentId: data.assessmentId,
      employeeCode: data.employeeCode
    }
    return this.http.post<any>(`${this.rootUrl}/Assessment/GetAssessmentReport`,post)
  }
}
