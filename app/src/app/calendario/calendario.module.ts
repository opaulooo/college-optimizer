import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CalendarioPage } from './calendario.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import { CalendarioPageRoutingModule } from './calendario-routing.module';
import { NgCalendarModule  } from 'ionic2-calendar';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: CalendarioPage }]),
    CalendarioPageRoutingModule,
    NgCalendarModule,
  ],
  declarations: [CalendarioPage]
})
export class CalendarioPageModule {}
