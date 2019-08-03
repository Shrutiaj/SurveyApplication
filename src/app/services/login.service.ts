import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  isUserValid(user){
    return this.http.get("http://localhost:8080/user/isValid?username="+user.id+"&password="+user.password).subscribe(
      response => response,
      error => error
    )
  }

  addUser(user){
    let body = JSON.stringify(user);
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    }
    this.http.post("http://localhost:3000/users",body,httpOptions).subscribe(
      response => console.log(response),
      error => console.log(error)
    )
              
  }
}
