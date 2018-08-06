import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class EnrollmentService {

  _url = "/enroll";

  constructor(private _https: HttpClient) { }

  enroll(user: User){
    return this._https.post<any>(this._url, user)
  }

}
