import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

import { LoginService } from "../../services/login.service";
import { SurveyHomeComponent } from "../survey-home/survey-home.component";
import { UserDataService } from "src/app/services/user-data.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: [SurveyHomeComponent],
})
export class LoginComponent implements OnInit {
  private users = [];
  user = {
    username: "",
    password: "",
  };
  public isValid;
  private isSubmitted: boolean = false;
  constructor(
    private loginService: LoginService,
    private router: Router,
    private userDataService: UserDataService
  ) {}

  ngOnInit() {}

  onSubmit() {
    this.isValid = this.loginService.isUserValid(this.user);
    this.userDataService.setUserData(this.user);
    if (this.loginService.isUserValid(this.user)) {
      this.router.navigateByUrl(`home/${this.user.username}`);
    }
  }
}
