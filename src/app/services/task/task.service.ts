import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  tasks: any[] = [];

  defaultStatus = 'Aberto'

  enteredTask: string = ''
  enteredDocument: string = ''
  enteredResponsible: string = ''
  enteredTerm: string = ''

  constructor (private router: Router) {}

  getTasks(): any[] {
    const tasks = [];

    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);

      if (key && key.startsWith('task_')) {
        const taskData = sessionStorage.getItem(key);
        if (taskData !== null) {
          tasks.push(JSON.parse(taskData));
        }
      }
    }

    return tasks;
  }

  addTask(inputTask: string, inputDocument: string, inputResponsible: string, inputTerm: string) {
      let sequenceNumber = parseInt(sessionStorage.getItem('sequenceNumber') || '0');

      const itemName = `task_${sequenceNumber}`;

      const newTask = {
        task: inputTask,
        document: inputDocument,
        responsible: inputResponsible,
        term: inputTerm,
        status: 'Aberto'
      };

      sessionStorage.setItem(itemName, JSON.stringify(newTask));

      sequenceNumber++;
      sessionStorage.setItem('sequenceNumber', sequenceNumber.toString());

      this.router.navigateByUrl('tarefas');
  }

  updateTaskStatus(taskIndex: number, status: string) {
    const key = `task_${taskIndex}`;
    const taskData = sessionStorage.getItem(key);

    if (taskData !== null) {
      const task = JSON.parse(taskData);

      task.status = status;

      sessionStorage.setItem(key, JSON.stringify(task));
    }
  }

  deleteTask(task: any) {
    sessionStorage.removeItem(`task_${task.task}`);
  }
}
