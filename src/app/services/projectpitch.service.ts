import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProjectpitchService {
  baseurl = 'https://generationgift.herokuapp.com/pitch';
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http:HttpClient) { }

  getPitches(): Observable<any> {
    return this.http.get(this.baseurl + '/pitches', {
      headers: this.httpHeaders,
    });
  }
  getOnePitch(id:number): Observable<any> {
    return this.http.get(this.baseurl + '/pitches/' + id + '/',
    {headers: this.httpHeaders});
  }
  updatePitch(pitch:any): Observable<any> {
    const body = {title:pitch.title,description:pitch.description,mpesa_no:pitch.mpesa_no,total_cost:pitch.total_cost};
    return this.http.put(this.baseurl + '/pitches/' + pitch.id + '/', body,
    {headers: this.httpHeaders});
  }  
  createPitch(pitch:any): Observable<any> {
    const body = {title:pitch.title,description:pitch.description,mpesa_no:pitch.mpesa_no,total_cost:pitch.total_cost};
    return this.http.post(this.baseurl + '/pitches/', body,
    {headers: this.httpHeaders});
  }
  deletePitch(id:number): Observable<any> {
    return this.http.delete(this.baseurl + '/pitches/' + id + '/',
    {headers: this.httpHeaders});
  }
}
