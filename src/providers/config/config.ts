import { Injectable } from '@angular/core';

// Key-words to avoid bugs from typos...
let configKeyword = "config";
let userKeyword = "userData";

/*
  Generated class for the ConfigProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConfigProvider {

  // private config = {
  //   showSlide: false,
  //   username: "",
  //   name: ""
  // }

  constructor() {
    // console.log('Hello ConfigProvider Provider');
  }

  getConfigData(): any {
    return localStorage.getItem(configKeyword);
  }

  getUserData(): any {
    return localStorage.getItem(userKeyword);
  }

  setConfigData(showSlide?: boolean, username?: string, name?: string) {
    let config = {
      showSlide: false,
      username: "",
      name: ""
    };
    if (showSlide) {
      config.showSlide = showSlide;
    }
    if (username) {
      config.username = username;
    }
    if (name) {
      config.name = name;
    }
  localStorage.setItem(configKeyword, JSON.stringify(config));
  }

}
