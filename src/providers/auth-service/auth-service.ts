import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { ToastController } from 'ionic-angular';

// let API = 'http://localhost:3000/';
let API = 'https://api.myjson.com/bins/i95m7';
/*
  Generated class for the AuthServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthServiceProvider {

  constructor(public http: Http, public toastCtrl: ToastController) {
    console.log('Hello AuthServiceProvider Provider');
  }

  toastForFailed(errorNumber) {
    let message = "";
    switch (errorNumber) {
      case 0:
        message = "Não há conexão com o Banco de Dados";
        break;
      case 400:
        message = "Requisição inválida para o Banco de Dados";
        break;
      case 404:
        message = "Não há este registro no Banco de Dados";
        break;
      default:
        message = "Erro de conexão...";
        break;
    }
    const toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle',
      cssClass: "toast-fail"
    });
    toast.present();
  }

  toastForSuccess(type) {
    let message = "";
    switch (type) {
      case "signup":
        message = "O usuário foi criado!";
        break;
      case "questionnaire":
        message = "O questionário foi totalmente respondido!";
        break;
    }
    const toast = this.toastCtrl.create({
      message: message,
      duration: 2000,
      position: 'middle',
      cssClass: "toast-success"
    });
    toast.present();
  }

  // Function to insert a new user...
  postData(newUser, type) {
    var headers = new Headers({ "Accept": 'application/json', 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(API + "users", newUser, options).subscribe(data => {
      console.log(data['_body']);
    }, error => {
      console.log(error);
      this.toastForFailed(error["status"]);
    });
  }

  getDatabase(user) {
    return this.http.get(API);
  }

  // Function to search for a user (authentication)...
  // getUser(user) {
  //   return this.http.get(API);
  // }

  // getCategoryData(categoryId) {
  //   return this.http.get(API + `categories/${categoryId}`);
  // }

}
