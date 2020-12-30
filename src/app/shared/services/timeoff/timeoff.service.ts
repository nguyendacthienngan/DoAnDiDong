import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from '../api.service';
import { ApiResult } from '../../../data-transfer/api-result';

@Injectable({
  providedIn: 'root'
})
export class TimeOffService extends ApiService{
  constructor(private http: HttpClient) { 
    super(http);
  }
  getTimeOffs(): Observable<ApiResult> {
    return super.apiGet<ApiResult>('local-events-timeoff', null, true);
  }
  createTimeOff(tmc: any): Observable<ApiResult> {
    return super.apiPost<ApiResult>('local-events-timeoff/add', tmc, null, true);
  }
  getTimeOff(id: number): Observable<ApiResult> {
    return super.apiGet<ApiResult>('local-events-timeoff/' + id, null, true);
  }
  updateTimeOff(tmc: any): Observable<ApiResult> {
    return super.apiPut<ApiResult>('local-events-timeoff/update/', tmc, null, true);
  }   
}
