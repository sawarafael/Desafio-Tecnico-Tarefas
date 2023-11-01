import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/services/task/task.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  enteredTask: string = ''
  enteredDocument: string = ''
  enteredResponsible: string = ''
  enteredTerm: string = ''

  constructor (private Task: TaskService ) {}

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.enteredTask !== '' && this.enteredDocument !== '' && this.enteredResponsible !== '' && this.enteredTerm !== '') {
      this.Task.addTask(
        this.enteredTask,
        this.enteredDocument,
        this.enteredResponsible,
        this.enteredTerm
      );
    }
  }

}
