import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from '../api.service';
import { ApiResult } from '../../../data-transfer/api-result';

@Injectable({
  providedIn: 'root'
})
export class SalaryCoService extends ApiService{
  constructor(private http: HttpClient) { 
    super(http);
  }
  getSalaryCoefficients(): Observable<ApiResult> {
    return super.apiGet<ApiResult>('salaries', null, true);
  }
}
