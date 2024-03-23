import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private http: HttpClient) {}

  submitForm(reqObj: any): Observable<any> {
    return this.http.post(
      'http://35.88.151.200:1337/api/v1/user/query',
      reqObj,
    );
  }
}
