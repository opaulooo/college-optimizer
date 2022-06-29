import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MateriasPage } from './materias.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MateriasPagePageRoutingModule } from './materias-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MateriasPagePageRoutingModule
  ],
  declarations: [MateriasPage]
})
export class MateriasPageModule {}
