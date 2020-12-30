import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from '../api.service';
import { ApiResult } from '../../../data-transfer/api-result';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService extends ApiService{
  constructor(private http: HttpClient) { 
    super(http);
  }
  getSchedules(): Observable<ApiResult> {
    return super.apiGet<ApiResult>('schedules', null, true);
  }
  createSchedule(tmc: any): Observable<ApiResult> {
    return super.apiPost<ApiResult>('schedules/add', tmc, null, true);
  }
  getSchedule(id: number): Observable<ApiResult> {
    return super.apiGet<ApiResult>('schedules/' + id, null, true);
  }
  updateSchedule(tmc: any): Observable<ApiResult> {
    return super.apiPut<ApiResult>('schedules/update/', tmc, null, true);
  }   
  deleteSchedule(id: number): Observable<ApiResult> {
    return super.apiDelete<ApiResult>('schedules/delete/' + id, null, true);
  }
}
