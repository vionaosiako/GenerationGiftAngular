import { Component, OnInit } from '@angular/core';
import { DonationService } from 'src/app/services/donation.service';

@Component({
  selector: 'app-donation',
  templateUrl: './donation.component.html',
  styleUrls: ['./donation.component.css'],
  providers:[DonationService]
})
export class DonationComponent implements OnInit {
  selectedDonation;
  donations=[{id:1}, {items:'test'}, {donorname:'name'},{location:'location'},{time:'time'},{donationdate:'donationdate'},{user:'user'}];

  constructor(private api:DonationService) {
    this.getDonations();
    this.selectedDonation = {id:-1,items:'', donorname:'',location:'',time:'',donationdate:'',user:''};
  }

  ngOnInit(): void {
    this.getDonations();
  }

  getDonations=() =>{
    this.api.getDonations().subscribe(
      data => {
        this.donations =data
        // console.log(data)
      },
      error => {
        console.log(error)
      }
    )
  }
  
  donationsClicked = (donation:any) => {
    this.api.getOneDonation(donation.id).subscribe(
      data => {
        this.selectedDonation = data;
      },
      error => {
        console.log(error);
      }
    );
    // console.log(training.id)
  }

  putDonation = () => {
    this.api.updateDonation(this.selectedDonation).subscribe(
      data => {
        this.getDonations();
      },
      error => {
        console.log(error);
      }
    );
  }
  newDonation = () => {
    this.api.createDonation(this.selectedDonation).subscribe(
      data => {
        this.donations.push(data);
      },
      error => {
        console.log(error);
      }
    );
  }
  deleteDonation = () => {
    this.api.deleteDonation(this.selectedDonation.id).subscribe(
      data => {
        this.getDonations();
      },
      error => {
        console.log(error);
      }
    );
  }

}
