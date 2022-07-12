import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable, observable } from 'rxjs';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  baseurl=  "https://generationgift.herokuapp.com/donation";
  // baseurl = environment.baseurl
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(private http:HttpClient) { }

  getDonations(): Observable<any>{
    return this.http.get(this.baseurl+'/donations', {headers: this.httpHeaders});
  }

  getOneDonation(id:number): Observable<any> {
    return this.http.get(this.baseurl + '/donations/' + id + '/',
    {headers: this.httpHeaders});
  }
  updateDonation(donation:any): Observable<any> {
    const body = {poster: donation.poster,items:donation.items,donorname:donation.donorname,location:donation.location,time:donation.time,donationdate:donation.donationdate};
    return this.http.put(this.baseurl + '/donations/' + donation.id + '/', body,
    {headers: this.httpHeaders});
  }  
  createDonation(donation:any): Observable<any> {
    const body = {poster: donation.poster,items:donation.items,donorname:donation.donorname,location:donation.location,time:donation.time,donationdate:donation.donationdate};
    return this.http.post(this.baseurl + '/donations/', body,
    {headers: this.httpHeaders});
  }
  deleteDonation(id:number): Observable<any> {
    return this.http.delete(this.baseurl + '/donations/' + id + '/',
    {headers: this.httpHeaders});
  }
}
