import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class UserDataService {
  private user = new BehaviorSubject({
    username: "",
    password: "",
  });
  currentUser = this.user.asObservable();
  constructor() {}

  setUserData(user: any) {
    this.user.next(user);
  }
}
