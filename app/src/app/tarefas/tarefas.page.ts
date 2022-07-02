import { Component } from '@angular/core';

@Component({
  selector: 'app-tarefas',
  templateUrl: 'tarefas.page.html',
  styleUrls: ['tarefas.page.scss']
})
export class TarefasPage {
  taskName: any = ''; // Entered Text
  taskList = []; // Array to store tasks

  constructor() { }

  // addTask Function
  // First we check if the text is entered or not in input box by verifying if length > 0
  // If length is greater than 0, then only we add taskName to taskList array
  // After adding we reset the taskName
  addTask() {
    if (this.taskName.length > 0) {
      let task = this.taskName;
      this.taskList.push(task);
      this.taskName = '';
    }
  }
  // deleteTask Function
  // When user clicks the delete task button, this function is called with index i as parameter
  // Since tasks are added to taskList, we delete the task at index i using splice() array method
  // This deletes only that task at index i
  deleteTask(index) {
    this.taskList.splice(index, 1);
  }
}
