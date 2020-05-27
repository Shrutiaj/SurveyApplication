import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { LoginService } from "../../services/login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  private users = [];
  user = {
    id: "",
    password: "",
    submitedSurveys: [],
  };
  public isValid;
  private isSubmitted: boolean = false;
  constructor(private loginService: LoginService, private router: Router) {}

  ngOnInit() {}

  onSubmit() {
    this.isValid = this.loginService.isUserValid(this.user);
    if (this.loginService.isUserValid(this.user)) {
      this.router.navigateByUrl(`home/${this.user.id}`);
    }
  }
}
