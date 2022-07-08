import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Training } from '../models/training';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  baseurl=  "https://generationgift.herokuapp.com/training";
  // baseurl = environment.baseurl
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http:HttpClient) { }
  getTrainings(): Observable<any>{
    return this.http.get(this.baseurl+'/Training', {headers: this.httpHeaders});
  }

  getOneTraining(id:number): Observable<any> {
    return this.http.get(this.baseurl + '/Training/' + id + '/',
    {headers: this.httpHeaders});
  }
  updateTraning(training:any): Observable<any> {
    const body = {title:training.title,poster:training.poster,description:training.description,venue:training.venue,category:training.category,eventdate:training.eventdate,eventtime:training.eventtime};
    return this.http.put(this.baseurl + '/Training/' + training.id + '/', body,
    {headers: this.httpHeaders});
  }  
  createTraining(training:any): Observable<any> {
    const body = {poster: training.poster, title: training.title, description: training.description, venue: training.venue, category: training.category, eventdate: training.eventdate, eventtime: training.eventtime};
    return this.http.post(this.baseurl + '/Training/', body,
    {headers: this.httpHeaders});
  }
  deleteTraining(id:number): Observable<any> {
    return this.http.delete(this.baseurl + '/Training/' + id + '/',
    {headers: this.httpHeaders});
  }

}



