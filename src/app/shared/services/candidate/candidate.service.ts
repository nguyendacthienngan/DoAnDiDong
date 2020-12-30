import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from '../api.service';
import { ApiResult } from '../../../data-transfer/api-result';

@Injectable({
  providedIn: 'root'
})
export class CandidateService extends ApiService{
  constructor(private http: HttpClient) { 
    super(http);
  }
  getCandidates(): Observable<ApiResult> {
    return super.apiGet<ApiResult>('candidates', null, true);
  }
  createCandidate(tmc: any): Observable<ApiResult> {
    return super.apiPost<ApiResult>('candidates/add', tmc, null, true);
  }
  getCandidate(id: number): Observable<ApiResult> {
    return super.apiGet<ApiResult>('candidates/' + id, null, true);
  }
  updateCandidate(tmc: any): Observable<ApiResult> {
    return super.apiPut<ApiResult>('candidates/update/', tmc, null, true);
  }   

}
