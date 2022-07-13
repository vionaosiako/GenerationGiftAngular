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
  error_username:any
  error_email:any
  error_password1:any
  invalid:any
  constructor(private router:Router, private userService:UserService) { }
  ngOnInit() {
    this.register = {
      username: '',
      email:'',
      password: '',
    };
  }
  registerUser(){
    this.userService.registerUsers(this.register).subscribe(
      response=> {
        alert('User has been registered successfully!')
        this.router.navigate(['/login']);
      },
      error=> console.log (error)
    );
  }
}