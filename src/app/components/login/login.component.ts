import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {
  login: any;
  router:any;
  constructor(public _userService: UserService,public_router: Router) { }
  ngOnInit() {
    this.login = {
      username: '',
      password: ''
    };
  }
  home() {
    this.router.navigate(['/','']);
  }
  loginUser() {
    this._userService.loginUsers(this.login).subscribe(
      response => {
        alert('Login successful!')
      },
      error =>{
        alert('Error!')
      }
    );
  }
  refreshToken() {
    this._userService.refreshToken();
  }
  logout() {
    this._userService.logout();
  }
}
