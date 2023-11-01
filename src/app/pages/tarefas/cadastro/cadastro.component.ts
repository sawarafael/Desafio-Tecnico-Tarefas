import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  defaultStatus = 'Aberto'

  enteredTask: string = ''
  enteredDocument: string = ''
  enteredResponsible: string = ''
  enteredTerm: string = ''

  constructor (private router: Router) {}

  ngOnInit(): void {

  }

  async onSubmit() {
    if (this.enteredTask !== '' && this.enteredDocument !== '' && this.enteredResponsible !== '' && this.enteredTerm !== '') {
      let sequenceNumber = parseInt(sessionStorage.getItem('sequenceNumber') || '0');

      const itemName = `task_${sequenceNumber}`;

      const newTask = {
        task: this.enteredTask,
        document: this.enteredDocument,
        responsible: this.enteredResponsible,
        term: this.enteredTerm,
        status: this.defaultStatus
      };

      sessionStorage.setItem(itemName, JSON.stringify(newTask));

      sequenceNumber++;
      sessionStorage.setItem('sequenceNumber', sequenceNumber.toString());

      this.router.navigateByUrl('tarefas');
    }
  }

}
