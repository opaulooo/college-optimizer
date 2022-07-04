import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TarefasPage } from './tarefas.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';
import {IonicInputMaskModule} from "@thiagoprz/ionic-input-mask";

import { TarefasPageRoutingModule } from './tarefas-routing.module';
import { CardComponent } from './components/list/card.component';
import { TarefasDetalhesComponent } from './tarefas-detalhes/tarefas-detalhes.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ExploreContainerComponentModule,
    TarefasPageRoutingModule,
    IonicInputMaskModule
  ],
  declarations: [TarefasPage, CardComponent, TarefasDetalhesComponent]
})
export class TarefasPageModule {}
