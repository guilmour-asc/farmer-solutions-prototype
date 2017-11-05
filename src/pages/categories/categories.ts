import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the CategoriesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-categories',
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public actionsheetCtrl: ActionSheetController) {
  }

  openActions() {
    let actionSheet = this.actionsheetCtrl.create({
      title: 'Ações de Categoria',
      cssClass: 'action-sheets-basic-page',
      buttons: [
        {
          text: 'Adicionar',
          icon: 'add-circle',
          handler: () => {
            console.log('Adicionado.');
          }
        },
        {
          text: 'Retirar',
          role: 'destructive',
          icon: 'close',
          handler: () => {
            console.log('Retirado.');
          }
        },
        {
          text: 'Cancelar',
          role: 'cancel', // sempre no fundo
          handler: () => {
            console.log('Cancelado.');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
