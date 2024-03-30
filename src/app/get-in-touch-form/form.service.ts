import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FormService {
  constructor(private http: HttpClient) {}

  submitForm(reqObj: any): Observable<any> {
    const queryObj: any = {};
    queryObj.name = reqObj.name;
    queryObj.emailId = reqObj.email;
    queryObj.phoneNumber = reqObj.phoneNumber;
    queryObj.userQuery = reqObj.query;
    return this.http.post(
      'https://pabdaconsulting.com/api/v1/user/query',
      queryObj,
    );
  }

  submitCareerQuery(formData: FormData) {
    return this.http.post(
      'https://pabdaconsulting.com/api/v1/user/career/query',
      formData,
    );
  }

  submitContactQuery(contactData: any) {
    const apiUrl = 'https://pabdaconsulting.com/api/v1/user/contact/query';

    return this.http.post(apiUrl, contactData);
  }
}
