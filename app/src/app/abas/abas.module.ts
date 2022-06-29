import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AbasPageRoutingModule } from './abas-routing.module';

import { AbasPage } from './abas.page';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    AbasPageRoutingModule
  ],
  declarations: [AbasPage]
})
export class AbasPageModule {}
