import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from '../api.service';
import { ApiResult } from '../../../data-transfer/api-result';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AccountService extends ApiService{
  constructor(private http: HttpClient) { 
    super(http);
  }
  getAccount(employee_id: number): Observable<ApiResult> {
    return super.apiGet<ApiResult>('authentication/' + employee_id, null, true);
  }
  login(user_name: string, password: string) {
    return super.apiPost<ApiResult>('/login', { user_name: user_name, password: password });
  }

}
