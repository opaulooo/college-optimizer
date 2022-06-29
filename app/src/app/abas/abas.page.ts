import { Component } from '@angular/core';

@Component({
  selector: 'app-abas',
  templateUrl: 'abas.page.html',
  styleUrls: ['abas.page.scss']
})
export class AbasPage {

  titulo = "Matérias"
  constructor() { }

  alterTitle(title){
    this.titulo = title
  }

  onToggleColorTheme() {
    if (document.body.getAttribute('color-theme') == 'light') {
      document.body.setAttribute('color-theme', 'dark');
    } else {
      document.body.setAttribute('color-theme', 'light');
    }
  }
}
