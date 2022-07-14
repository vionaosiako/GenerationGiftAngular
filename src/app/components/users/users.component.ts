import { Component, OnInit } from '@angular/core';
import { UserProfileService } from 'src/app/services/user-profile.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
  providers: [UserProfileService],
})
export class UsersComponent implements OnInit {
  selectedUser;
  userProfile =[
    {id:1},
    {user: 'Ekal'},
    {name:'Ekal'},
    {profilePicture:'profile'},
    {bio: 'Ekal'},
    {email: 'Ekal@gmail.com'},
    {location: 'here'},
    {contact: '0705060807'}  
  ]


  constructor(private api: UserProfileService) { 
    this.getUser();
    this.selectedUser = {id:-1,user:'', name:'',profilePicture:'',bio:'',location:'',email:'',contact:''};
  }

  ngOnInit(): void {
    this.getUser();
  }

  getUser = () => {
    this.api.getUser().subscribe(
      (data) => {
        this.userProfile = data;
      },
      (error) => {
        console.log(error);
      }
    );
  };


}


