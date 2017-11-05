import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LevelPage } from './level';

@NgModule({
  declarations: [
    LevelPage,
  ],
  imports: [
    IonicPageModule.forChild(LevelPage),
  ],
})
export class LevelPageModule {}
