import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private users = [];
  user = {
    id: "",
    password: "",
    submitedSurveys : []
  };
  isValid: boolean = true;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.loginService.getUsers().subscribe(
      response => {
        this.users = response;
        console.log(this.users);
      },
      error => console.log(error)
    )
  }

  onSubmit(){
    this.users.forEach(
      user => {
        if(user.id == this.user.id && user.password == this.user.password){
          this.isValid = true;
        }
        else{
          //this.loginService.addUser(this.user);
          this.isValid = false;
        }
      });
      if(this.isValid){
        this.router.navigateByUrl(`home/${this.user.id}`);
      }
      else{
        console.log(this.isValid);
      }
    }
}
