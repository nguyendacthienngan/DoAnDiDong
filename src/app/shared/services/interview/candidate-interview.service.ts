import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from '../api.service';
import { ApiResult } from '../../../data-transfer/api-result';

@Injectable({
  providedIn: 'root'
})
export class CandidateInterviewService extends ApiService{
  constructor(private http: HttpClient) { 
    super(http);
  }
  getCandidateInterviews(): Observable<ApiResult> {
    return super.apiGet<ApiResult>('candidates-interviews', null, true);
  }
  createCandidateInterview(tmc: any): Observable<ApiResult> {
    return super.apiPost<ApiResult>('candidates-interviews/add', tmc, null, true);
  }
  getCandidateInterview(id: number): Observable<ApiResult> {
    return super.apiGet<ApiResult>('candidates-interviews/' + id, null, true);
  }
  updateCandidateInterview(tmc: any): Observable<ApiResult> {
    return super.apiPut<ApiResult>('candidates-interviews/update/', tmc, null, true);
  }   
  deleteCandidateInterview(id: number): Observable<ApiResult> {
    return super.apiDelete<ApiResult>('candidates-interviews/delete/' + id, null, true);
  }
}
