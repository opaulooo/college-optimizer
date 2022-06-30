import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ResumosPage } from './resumos.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { ResumosPageRoutingModule } from './resumos-routing.module';
import { CardComponent } from './components/card/card.component';
import { ResumosDetalhesComponent } from './resumos-detalhes/resumos-detalhes.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    ExploreContainerComponentModule,
    RouterModule.forChild([{ path: '', component: ResumosPage }]),
    ResumosPageRoutingModule,
  ],
  declarations: [ResumosPage, CardComponent, ResumosDetalhesComponent]
})
export class ResumosPageModule {}
