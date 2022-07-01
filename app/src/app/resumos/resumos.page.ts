/* eslint-disable max-len */
import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IResumo } from '../shared/interfaces/resumo';

@Component({
  selector: 'app-resumos',
  templateUrl: 'resumos.page.html',
  styleUrls: ['resumos.page.scss']
})
export class ResumosPage {
  resumos: IResumo[] = [
    {
      titulo: 'Resumo de Instalações Elétricas',
      breveDescricao: 'Resumo da matéria passada no dia 20/06/2022 sobre diemnsionamento de fios neutro',
      resumo: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur scelerisque lacus, nec porttitor neque convallis vitae. Aliquam ultricies hendrerit nulla vel venenatis. Ut auctor, felis in pellentesque pulvinar, libero lacus euismod mi, vel porttitor risus orci id justo. Nam ac massa sed ipsum finibus porttitor vitae non erat. Sed quis lacus sed felis egestas posuere id vitae justo. Cras ac ante iaculis, condimentum ligula id, facilisis tortor. Cras magna erat, congue sit amet massa nec, ullamcorper ultrices mi. Donec accumsan lectus id elit vestibulum egestas. Ut at mattis turpis.`,
      dataCriacao: new Date(),
      dataDeletado: null,
      dataUltimaAtualizacao: new Date(),
      deletado: false
    },
    {
      titulo: 'Resumo de Instalações Elétricas',
      breveDescricao: 'Resumo da matéria passada no dia 20/06/2022 sobre diemnsionamento de fios neutro',
      resumo: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi cursus lobortis nisi, id sagittis nisi sollicitudin eu. Suspendisse rutrum eleifend nisi, a iaculis leo ultricies ac. Vestibulum finibus lacus luctus tortor efficitur, at auctor elit rhoncus. Nullam fringilla sem quis tellus lacinia lobortis. Etiam elementum viverra varius. Phasellus a augue est. Quisque sed semper ex, at feugiat quam. Sed orci nisi, posuere sed tempor sed, pretium a ante. Maecenas non dictum risus, in bibendum leo. Ut finibus, mauris quis eleifend tristique, erat nunc malesuada odio, vitae congue mauris turpis imperdiet enim. In aliquet dictum leo eu pulvinar. Curabitur felis dolor, dignissim at cursus quis, luctus vel sem.
      Sed elementum magna leo, in dictum risus venenatis pellentesque. Pellentesque et tortor eget diam ultrices iaculis. Donec laoreet auctor lectus, quis cursus nulla commodo at. Sed euismod massa leo, ut pulvinar tortor congue eu. Aliquam id porta tortor. Nunc faucibus non felis id. `,
      dataCriacao: new Date(),
      dataDeletado: null,
      dataUltimaAtualizacao: new Date(),
      deletado: false
    },
    {
      titulo: 'Resumo de Instalações Elétricas',
      breveDescricao: 'Resumo da matéria passada no dia 20/06/2022 sobre diemnsionamento de fios neutro',
      resumo: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur scelerisque lacus, nec porttitor neque convallis vitae. Aliquam ultricies hendrerit nulla vel venenatis. Ut auctor, felis in pellentesque pulvinar, libero lacus euismod mi, vel porttitor risus orci id justo. Nam ac massa sed ipsum finibus porttitor vitae non erat. Sed quis lacus sed felis egestas posuere id vitae justo. Cras ac ante iaculis, condimentum ligula id, facilisis tortor. Cras magna erat, congue sit amet massa nec, ullamcorper ultrices mi. Donec accumsan lectus id elit vestibulum egestas. Ut at mattis turpis. `,
      dataCriacao: new Date(),
      dataDeletado: null,
      dataUltimaAtualizacao: new Date(),
      deletado: false
    },
    {
      titulo: 'Resumo de Instalações Elétricas',
      breveDescricao: 'Resumo da matéria passada no dia 20/06/2022 sobre diemnsionamento de fios neutro',
      resumo: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur scelerisque lacus, nec porttitor neque convallis vitae. Aliquam ultricies hendrerit nulla vel venenatis. Ut auctor, felis in pellentesque pulvinar, libero lacus euismod mi, vel porttitor risus orci id justo. Nam ac massa sed ipsum finibus porttitor vitae non erat. Sed quis lacus sed felis egestas posuere id vitae justo. Cras ac ante iaculis, condimentum ligula id, facilisis tortor. Cras magna erat, congue sit amet massa nec, ullamcorper ultrices mi. Donec accumsan lectus id elit vestibulum egestas. Ut at mattis turpis. `,
      dataCriacao: new Date(),
      dataDeletado: null,
      dataUltimaAtualizacao: new Date(),
      deletado: false
    },
    {
      titulo: 'Resumo de Instalações Elétricas',
      breveDescricao: 'Resumo da matéria passada no dia 20/06/2022 sobre diemnsionamento de fios neutro',
      resumo: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur scelerisque lacus, nec porttitor neque convallis vitae. Aliquam ultricies hendrerit nulla vel venenatis. Ut auctor, felis in pellentesque pulvinar, libero lacus euismod mi, vel porttitor risus orci id justo. Nam ac massa sed ipsum finibus porttitor vitae non erat. Sed quis lacus sed felis egestas posuere id vitae justo. Cras ac ante iaculis, condimentum ligula id, facilisis tortor. Cras magna erat, congue sit amet massa nec, ullamcorper ultrices mi. Donec accumsan lectus id elit vestibulum egestas. Ut at mattis turpis. `,
      dataCriacao: new Date(),
      dataDeletado: null,
      dataUltimaAtualizacao: new Date(),
      deletado: false
    },
    {
      titulo: 'Resumo de Instalações Elétricas',
      breveDescricao: 'Resumo da matéria passada no dia 20/06/2022 sobre diemnsionamento de fios neutro',
      resumo: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur scelerisque lacus, nec porttitor neque convallis vitae. Aliquam ultricies hendrerit nulla vel venenatis. Ut auctor, felis in pellentesque pulvinar, libero lacus euismod mi, vel porttitor risus orci id justo. Nam ac massa sed ipsum finibus porttitor vitae non erat. Sed quis lacus sed felis egestas posuere id vitae justo. Cras ac ante iaculis, condimentum ligula id, facilisis tortor. Cras magna erat, congue sit amet massa nec, ullamcorper ultrices mi. Donec accumsan lectus id elit vestibulum egestas. Ut at mattis turpis. `,
      dataCriacao: new Date(),
      dataDeletado: null,
      dataUltimaAtualizacao: new Date(),
      deletado: false
    },
    {
      titulo: 'Resumo de Instalações Elétricas',
      breveDescricao: 'Resumo da matéria passada no dia 20/06/2022 sobre diemnsionamento de fios neutro',
      resumo: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. In efficitur scelerisque lacus, nec porttitor neque convallis vitae. Aliquam ultricies hendrerit nulla vel venenatis. Ut auctor, felis in pellentesque pulvinar, libero lacus euismod mi, vel porttitor risus orci id justo. Nam ac massa sed ipsum finibus porttitor vitae non erat. Sed quis lacus sed felis egestas posuere id vitae justo. Cras ac ante iaculis, condimentum ligula id, facilisis tortor. Cras magna erat, congue sit amet massa nec, ullamcorper ultrices mi. Donec accumsan lectus id elit vestibulum egestas. Ut at mattis turpis. AAAA
      A
      A
      A
      A
      A
      A

      A
      A
      A
      A
      A
      A
      A

      A
      A
      A
      A
      A
      A
      A
      A

      A
      A
      A
      A
      A
      A
      `,
      dataCriacao: new Date(),
      dataDeletado: null,
      dataUltimaAtualizacao: new Date(),
      deletado: false
    },
  ];

  constructor(private navCtrl: NavController) {}

  irDetalhes(resumo: IResumo){
    this.navCtrl.navigateForward('/abas/resumos/editar', {
      state: resumo
    });
  }

  irAdicionar(){
    this.navCtrl.navigateForward('/abas/resumos/novo');
  }
}
