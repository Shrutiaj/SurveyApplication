import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<any>{
    return this.http.get("http://localhost:3000/users")
                    .pipe(map(response => {
                      return response;                
                    }));
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
