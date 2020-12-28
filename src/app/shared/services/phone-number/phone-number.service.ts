import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, BehaviorSubject } from 'rxjs';
import { ApiService } from '../api.service';
import { ApiResult } from '../../../data-transfer/api-result';
import { PhoneNumber } from '../../../view-model/phone-number.vm'
@Injectable({
  providedIn: 'root'
})
export class PhoneNumberService extends ApiService{
  constructor(private http: HttpClient) { 
    super(http);
  }
  getPhoneNumbers(): Observable<ApiResult> {
    return super.apiGet<ApiResult>('contacts', null, true);
  }
  createPhoneNumber(tmc: any): Observable<ApiResult> {
    return super.apiPost<ApiResult>('contacts/add', tmc, null, true);
  }
  createPhoneNum(tmc: any): Observable<PhoneNumber> {
    return super.apiPost<PhoneNumber>('contacts/add', tmc, null, true);
  }
}
