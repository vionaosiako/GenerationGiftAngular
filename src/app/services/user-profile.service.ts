import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserProfileService {
  baseurl=  "https://generationgift.herokuapp.com/auth/api";
  // baseurl = environment.baseurl
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http:HttpClient) { }
  getUser(): Observable<any>{
    return this.http.get(this.baseurl+'/profile', {headers: this.httpHeaders});
  }
}
