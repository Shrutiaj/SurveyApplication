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
  private isValid;
  private isSubmitted: boolean = false;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.loginService.isUserValid().subscribe(
      response => {
        this.isValid = response;
        if(this.isValid){
          this.router.navigateByUrl(`home/${this.user.id}`);
        };
      },
      error => console.log(error)
    );
  }
}
