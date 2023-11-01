import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-tarefas',
  templateUrl: './tarefas.component.html',
  styleUrls: ['./tarefas.component.css'],
})
export class TarefasComponent implements OnInit {

  Tasks: any[] = []

  constructor(private Task: TaskService) {}

  ngOnInit(): void {
    this.loadTasksFromSessionStorage();
  }


  loadTasksFromSessionStorage() {
    this.Tasks = this.Task.getTasks() || [];
  }

}
