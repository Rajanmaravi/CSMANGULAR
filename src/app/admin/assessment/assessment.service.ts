import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AbstractControl, ValidatorFn } from '@angular/forms';
import { AssessmentBTDeo, AssessmentFormData } from '../../_dto/assessment-dao.model';

@Injectable({
  providedIn: 'root'
})
export class AssessmentService {

  private rootUrl = 'https://localhost:7152/api'

  constructor(
    private http:HttpClient,
  ) { }

  getAssessment():Observable<any>{
    return this.http.get<any>(`${this.rootUrl}/Assessment/GetAssessment`)
  }

  getJseAssessment(batchId:any,technologyId:any):Observable<any>{
    let post:AssessmentBTDeo={
      batchId: batchId,
      technologyId: technologyId
    }
    return this.http.post<any>(`${this.rootUrl}/Assessment/GetJseAssessment`,post);
  }

  addAssessment(formData:any){
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let userCode : string | null = localStorage.getItem('userCode');
    let loggedInUser: string = userCode || '';
    let post:AssessmentFormData = {
      batchId: formData.batchId,
      technologyId: formData.technologyId,
      assessmentId: formData.assessmentId,
      assessmentDate: formData.assessmentDate,
      description: formData.description,
      loggedInUser:loggedInUser,
      jseDaoModels: formData.jseUser
    }

    return this.http.post(`${this.rootUrl}/Assessment/CreatAssessment`, post, {
      headers: headers,
      responseType: 'text' 
    });
  }

  dateSelectedValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const selectedDate = control.value;
      return selectedDate ? null : { 'dateNotSelected': true };
    };
  }

}
