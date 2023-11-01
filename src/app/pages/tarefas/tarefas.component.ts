import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css'],
})
export class TarefasComponent implements OnInit {
  tasks: any[] = [];

  constructor() {}

  ngOnInit(): void {
    this.loadTasksFromSessionStorage();
  }


  loadTasksFromSessionStorage() {
    this.tasks = [];

    for (let i = 0; i < sessionStorage.length; i++) {
      const key = sessionStorage.key(i);

      if (key && key.startsWith('task_')) {
        const taskData = sessionStorage.getItem(key);
        if (taskData !== null) {
          this.tasks.push(JSON.parse(taskData));
        }
      }
    }
  }
}
