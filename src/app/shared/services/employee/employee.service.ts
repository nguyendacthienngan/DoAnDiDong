import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from '../api.service';
import { ApiResult } from '../../../data-transfer/api-result';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends ApiService{
  constructor(private http: HttpClient) { 
    super(http);
  }
  getEmployees(): Observable<ApiResult> {
    return super.apiGet<ApiResult>('employees', null, true);
  }
  createEmployee(tmc: any): Observable<ApiResult> {
    return super.apiPost<ApiResult>('employees/add', tmc, null, true);
  }
  getEmployee(id: number): Observable<ApiResult> {
    return super.apiGet<ApiResult>('employees/' + id, null, true);
  }
  updateEmployee(tmc: any): Observable<ApiResult> {
    return super.apiPut<ApiResult>('employees/update' + tmc.id, tmc, null, true);
  }   

}
