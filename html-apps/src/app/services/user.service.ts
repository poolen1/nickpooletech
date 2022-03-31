import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  readonly APIUrl = "http://localhost:5000/api";

  constructor(private http: HttpClient) { }

  getUserList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/User');
  }

  addUser(val: any) {
    console.log("NP: addUser value: ", val);
    return this.http.post<any>(this.APIUrl + '/User', val);
  }
}
