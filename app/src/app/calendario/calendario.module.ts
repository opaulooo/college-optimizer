import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarioPage } from './calendario.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { CalendarioPageRoutingModule } from './calendario-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: CalendarioPage }]),
    CalendarioPageRoutingModule,
  ],
  declarations: [CalendarioPage]
})
export class CalendarioPageModule {}
