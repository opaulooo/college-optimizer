import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MateriasPage } from './materias.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { MateriasPagePageRoutingModule } from './materias-routing.module';
import { CardComponent } from './components/card/card.component';
import { MateriasDetalhesComponent } from './materias-detalhes/materias-detalhes.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    MateriasPagePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [MateriasPage, CardComponent, MateriasDetalhesComponent]
})
export class MateriasPageModule {}
