import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ResumosPage } from './resumos.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ResumosPageRoutingModule } from './resumos-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: ResumosPage }]),
    ResumosPageRoutingModule,
  ],
  declarations: [ResumosPage]
})
export class ResumosPageModule {}
