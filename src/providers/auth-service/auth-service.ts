import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

let API = 'http://localhost:3000';
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http) {
    console.log('Hello AuthServiceProvider Provider');
  }

  // Function to insert a new user...
  postData(newUser, type) {
    var headers = new Headers({ "Accept": 'application/json', 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(API + "/users", newUser, options).subscribe(data => {
      console.log(data['_body']);
    }, error => {
      console.log(error);
    });
  }

  // Function to search for a user (authentication)...
  getUser(user) {
    return this.http.get(API + `/users?username=${user["username"]}&password=${user["password"]}`);
  }

}
