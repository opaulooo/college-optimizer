import { Component, ViewChild } from '@angular/core';
import { Calendar } from '@awesome-cordova-plugins/calendar/ngx';
import { CalendarMode, Step } from 'ionic2-calendar/calendar';
import { DataService } from 'providers/service/data-service';
import { ITarefa } from '../shared/interfaces/tarefa';
@Component({
  selector: 'app-calendario',
  templateUrl: 'calendario.page.html',
  styleUrls: ['calendario.page.scss']
})
export class CalendarioPage {

  dias = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"]
  meses = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
  ];

  events: any;

  eventSource = [];
  viewTitle: String;
  selectedDate: Date;
  isToday: boolean;

  tarefas: Array<ITarefa> = [];
  materias: Array<any> = [];
  calendar = {
    mode: 'month' as CalendarMode,
    step: 30 as Step,
    currentDate: new Date(),
    dateFormatter: {
      formatMonthViewDay: function (date: Date) {
        return date.getDate().toString();
      },
      formatMonthViewDayHeader: function (date: Date) {
        return 'MonMH';
      },
      formatMonthViewTitle: function (date: Date) {
        return 'testMT';
      },
      formatWeekViewDayHeader: function (date: Date) {
        return 'MonWH';
      },
      formatWeekViewTitle: function (date: Date) {
        return 'testWT';
      },
      formatWeekViewHourColumn: function (date: Date) {
        return 'testWH';
      },
      formatDayViewHourColumn: function (date: Date) {
        return 'testDH';
      },
      formatDayViewTitle: function (date: Date) {
        return 'testDT';
      }
    }
  };

  constructor(private service: DataService) { }

  ngOnInit() {

    this.service.get('materias-keys').subscribe((response) => {
      this.materias = response;
    })

    this.service.getTarefas().subscribe((response) => {
      this.tarefas = response;
    });

    if (this.tarefas.length > 0)
      this.eventSource = this.addEvents(this.tarefas);
  }

  onViewTitleChanged(title) {
    this.viewTitle = this.formatarData(new Date(title).toLocaleDateString());
  }

  onEventSelected(event) {
  }

  changeMode(mode) {
    this.calendar.mode = mode;
  }

  today() {
    this.calendar.currentDate = new Date();
  }

  onTimeSelected(ev) {
    this.viewTitle = this.formatarData(new Date(ev.selectedTime).toLocaleDateString());
  }

  onCurrentDateChanged(event: Date) {
    var today = new Date();
    today.setHours(0, 0, 0, 0);
    event.setHours(0, 0, 0, 0);
    this.isToday = today.getTime() === event.getTime();
  }

  addEvents(eventos: Array<ITarefa>) {
    var tarefas = [];
    eventos.forEach((element: ITarefa) => {
      var dateStart = new Date(element.dataInicio);
      var dateEnd = new Date(element.dataFim);

      var startTime = new Date(dateStart.getFullYear(), dateStart.getMonth(), dateStart.getDate(), 0, dateStart.getMinutes());
      var endTime = new Date(dateEnd.getFullYear(), dateEnd.getMonth(), dateEnd.getDate(), 0, dateEnd.getMinutes());

      tarefas.push({
        title: `${startTime.toLocaleDateString()} - ${endTime.toLocaleDateString()}:  ${element.materia} - ${element.titulo}`,
        startTime: startTime,
        endTime: endTime,
        allDay: false
      });
    });
    console.log(tarefas)
    this.events = tarefas;
    return tarefas;
  }

  onRangeChanged(ev) {
  }

  markDisabled = (date: Date) => {
    var current = new Date();
    current.setHours(0, 0, 0);
    return date < current;
  };


  doRefresh(event) {
    setTimeout(() => {
      this.ngOnInit();
      event.target.complete();
    }, 2000);
  }

  formatarData(str) {
    var partes = str.split('/').map(Number);
    var data = new Date(20 + partes[2] ? partes[2].toString() : '', partes[1] - 1, partes[0]);
    var diaSemana = this.dias[data.getDay() % 7];
    var mes = this.meses[data.getMonth()];
    return [diaSemana + ', ' + data.getDate(), 'de ' + mes[0].toUpperCase() + mes.slice(1, 100).toLowerCase()].join(' ');
  }

}
