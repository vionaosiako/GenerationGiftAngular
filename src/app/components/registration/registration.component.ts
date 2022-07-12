import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
  providers: [UserService]
})
export class RegistrationComponent implements OnInit {
  register: any;
  constructor(public router:Router, public userService:UserService) { }
  ngOnInit() {
    this.register = {
      username: '',
      email:'',
      password1: '',
      password2: '',
    };
  }
  registerUser() {
    this.userService.registerUsers(this.register).subscribe(
      response => {
        alert('Login successful!')
      },
      error =>{
        alert('Error!')
      }
    );
  }
}
