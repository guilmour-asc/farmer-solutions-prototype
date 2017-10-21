import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the MovieProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MovieProvider {
  private baseAPIPath = "https://api.themoviedb.org/3";

  constructor(public http: Http) {
    console.log('Hello MovieProvider Provider');
  }
  
  getLatestMovie(){
    return this.http.get(this.baseAPIPath + "/movie/latest?api_key=" + this.getAPIKey());
  }

  getPopularMovies(){
    return this.http.get(this.baseAPIPath + "/movie/popular?api_key=" + this.getAPIKey());
  }

  getAPIKey(): string{
    return "95c5f81c1e6d80209f435571602ce161";
  }

}
