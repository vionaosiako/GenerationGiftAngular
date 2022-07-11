import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class UserService {
  baseurl = 'https://generationgift.herokuapp.com/api';
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });
  // http options used for making API calls
  private httpOptions: any;
  // the actual JWT token
  public token!: string;
  // the token expiration date
  public token_expires !: Date;
  // the username of the logged in user
  public username !: string;
  // error messages received from the login attempt
  public errors: any = [];
  constructor(private http: HttpClient) {
    this.httpOptions = {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };
  }
  registerUsers(users:any): Observable<any> {
    return this.http.post(this.baseurl+'/users/',users)
  }
  // Uses http.post() to get an auth token from djangorestframework-jwt endpoint
  loginUsers(userData:any):Observable<any>{
    return this.http.post(this.baseurl+'/token/',userData);
  }
   // Refreshes the JWT token, to extend the time the user is logged in
    public refreshToken() {
    this.http.post(this.baseurl+ '/token/', JSON.stringify({token: this.token}), this.httpOptions).subscribe(
      data => {
        this.updateData('token');
      },
      err => {
        this.errors = err['error'];
      }
    );
  }
  public logout() {
    this.token ;
    this.token_expires;
    this.username ;
  }
  private updateData(token: any) {
    this.token = token;
    this.errors = [];
    // decode the token to read the username and expiration timestamp
    const token_parts = this.token.split(/\./);
    const token_decoded = JSON.parse(window.atob(token_parts[1]));
    console.log(token_decoded)
    this.token_expires = new Date(token_decoded.exp * 1000);
    this.username = token_decoded.username;
  }
}