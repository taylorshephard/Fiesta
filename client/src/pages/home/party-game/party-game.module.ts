import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PartyGamePage } from './party-game';

@NgModule({
  declarations: [
    PartyGamePage,
  ],
  imports: [
    IonicPageModule.forChild(PartyGamePage),
  ],
})
export class PartyGamePageModule {}
