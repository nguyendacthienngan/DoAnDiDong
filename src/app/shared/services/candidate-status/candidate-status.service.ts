import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from '../api.service';
import { ApiResult } from '../../../data-transfer/api-result';

@Injectable({
  providedIn: 'root'
})
export class CandidateStatusService extends ApiService{
  constructor(private http: HttpClient) { 
    super(http);
  }
  getStatuses(): Observable<ApiResult> {
    return super.apiGet<ApiResult>('statuses', null, true);
  }
  createStatus(tmc: any): Observable<ApiResult> {
    return super.apiPost<ApiResult>('statuses/add', tmc, null, true);
  }
  getStatus(id: number): Observable<ApiResult> {
    return super.apiGet<ApiResult>('statuses/' + id, null, true);
  }
  updateStatus(tmc: any): Observable<ApiResult> {
    return super.apiPut<ApiResult>('statuses/update/', tmc, null, true);
  }   

}
