import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import {BatchDaoModel, BatchModel, BatchSearchModel} from '../../_dto/batch-dao-model'

@Injectable({
  providedIn: 'root'
})
export class BatchService {
 

  private rootUrl = 'https://localhost:7152';

  constructor(private http:HttpClient) { }

   CreateBatch(batchModel: any): Observable<any> {
    debugger;
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let userCode = localStorage.getItem('userCode');
    let post: BatchDaoModel = {
      isActive: true,
      loggedInUser: userCode,
      batchCode: batchModel.batchCode,
      year: batchModel.year,
      month: batchModel.month,
      batchName :batchModel.batchName
    }

    return this.http.post(`${this.rootUrl}/api/Batch/Create`, post, {
      headers: headers,
      responseType: 'text' 
    });
  }

  getBatchList():Observable<any>{
    return this.http.get(`${this.rootUrl}/api/Batch/GetBatchList`);
  }

  searchBatches(searchTerm: BatchSearchModel): Observable<any> {
    return this.http.post<any>(`${this.rootUrl}/api/Batch/Search`, searchTerm, {});
  }

  updateBatchData(batch: BatchModel): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let userCode = localStorage.getItem('userCode');
    debugger;
    let updateBatch : BatchDaoModel = {
      batchCode: batch.batchCode,
      year: batch.year,
      month: batch.month,
      batchName: batch.batchName,
      isActive: true,
      loggedInUser: userCode
    }
    return this.http.post(`${this.rootUrl}/api/Batch/Update`, updateBatch, {
      headers: headers,
      responseType: 'text' 
    });
  }

  deleteBatch(data: BatchDaoModel): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    let userCode = localStorage.getItem('userCode');
    const requestData = {
      batchCode: data.batchCode,
      year: data.year,
      month: data.month,
      batchName: data.batchName,
      isActive: false,
      loggedInUser: userCode,
    };

    return this.http.post(`${this.rootUrl}/api/Batch/Delete`, requestData, {
      headers: headers,
      responseType: 'text' 
    });
  }

  getRaList():Observable<any>{
    return this.http.get(`${this.rootUrl}/api/Batch/GetRA`);
  }

}
