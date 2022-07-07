import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Training } from '../models/training';

@Injectable({
  providedIn: 'root'
})
export class TrainingService {

  baseurl=  "http://127.0.0.1:8000/training";
  // baseurl = environment.baseurl
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});
  constructor(private http:HttpClient) { }
  getTrainings(): Observable<any>{
    return this.http.get(this.baseurl+'/trainings', {headers: this.httpHeaders});
  }

  getOneTraining(id:number): Observable<any> {
    return this.http.get(this.baseurl + '/trainings/' + id + '/',
    {headers: this.httpHeaders});
  }
  updateTraning(training:any): Observable<any> {
    const body = {title:training.title,poster:training.poster,description:training.description,venue:training.venue,category:training.category,eventdate:training.eventdate,eventtime:training.eventtime};
    return this.http.put(this.baseurl + '/trainings/' + training.id + '/', body,
    {headers: this.httpHeaders});
  }  
  createTraining(training:any): Observable<any> {
    const body = {poster: training.poster, title: training.title, description: training.description, venue: training.venue, category: training.category, eventdate: training.eventdate, eventtime: training.eventtime};
    return this.http.post(this.baseurl + '/trainings/', body,
    {headers: this.httpHeaders});
  }
  deleteTraining(id:number): Observable<any> {
    return this.http.delete(this.baseurl + '/trainings/' + id + '/',
    {headers: this.httpHeaders});
  }

  // getOneTrainings(id): Observable<any>{
  //   return this.http.get(this.baseurl+'/trainings' + id +'/', {headers: this.httpHeaders});
  // }
//   API_URL = environment.API_URL
//   constructor(private http:HttpClient) { }

//   getTrainings():Observable<Training[]>{
//     return this.http.get<Training[]>(`${this.API_URL}/trainings/`);
//     // (this.API_URL);
    
//   }
}



