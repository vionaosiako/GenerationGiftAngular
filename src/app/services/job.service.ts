import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  baseurl = 'https://generationgift.herokuapp.com/job';
  httpHeaders = new HttpHeaders({ 'Content-Type': 'application/json' });

  constructor(private http:HttpClient) { }

  getJobs(): Observable<any> {
    return this.http.get(this.baseurl + '/employer', {
      headers: this.httpHeaders,
    });
  }
  getOneJob(id:number): Observable<any> {
    return this.http.get(this.baseurl + '/employer/' + id + '/',
    {headers: this.httpHeaders});
  }
  updateJob(job:any): Observable<any> {
    const body = {job_title:job.job_title,description:job.description,date_posted:job.date_posted,category:job.category,location:job.location,approximate_salary:job.approximate_salary,deadline:job.deadline};
    return this.http.put(this.baseurl + '/employer/' + job.id + '/', body,
    {headers: this.httpHeaders});
  }  
  createJob(job:any): Observable<any> {
    const body = {job_title:job.job_title,description:job.description,date_posted:job.date_posted,category:job.category,location:job.location,approximate_salary:job.approximate_salary,deadline:job.deadline};
    return this.http.post(this.baseurl + '/employer/', body,
    {headers: this.httpHeaders});
  }
  deleteJob(id:number): Observable<any> {
    return this.http.delete(this.baseurl + '/employer/' + id + '/',
    {headers: this.httpHeaders});
  }
}
