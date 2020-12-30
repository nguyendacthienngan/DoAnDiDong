import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from '../api.service';
import { ApiResult } from '../../../data-transfer/api-result';

@Injectable({
  providedIn: 'root'
})
export class InterviewService extends ApiService{
  constructor(private http: HttpClient) { 
    super(http);
  }
  getInterviews(): Observable<ApiResult> {
    return super.apiGet<ApiResult>('public-events-interviews', null, true);
  }
  createInterview(tmc: any): Observable<ApiResult> {
    return super.apiPost<ApiResult>('public-events-interviews/add', tmc, null, true);
  }
  getInterview(id: number): Observable<ApiResult> {
    return super.apiGet<ApiResult>('public-events-interviews/' + id, null, true);
  }
  updateInterview(tmc: any): Observable<ApiResult> {
    return super.apiPut<ApiResult>('public-events-interviews/update/', tmc, null, true);
  }   
  deleteSchedule(id: number): Observable<ApiResult> {
    return super.apiDelete<ApiResult>('public-events-interviews/delete/' + id, null, true);
  }
}
