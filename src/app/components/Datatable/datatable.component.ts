import { Component } from '@angular/core';
import { MatChipsModule } from '@angular/material/chips';
import { MatTableModule } from '@angular/material/table';

export interface Task {
  task: string;
  document: string;
  responsible: string;
  term: string;
  status: string;
}

const ELEMENT_DATA: Task[] = [
  { task: 'Tarefa 01', document: '1225484114', responsible: 'admin', term: new Date().toLocaleDateString(), status: 'Expirado' },
];


@Component({
  selector: 'app-datatable',
  styleUrls: ['datatable.component.css'],
  templateUrl: 'datatable.component.html',
  standalone: true,
  imports: [MatTableModule, MatChipsModule],
})

export class Datatable {
  displayedColumns: string[] = ['task', 'document', 'responsible', 'term', 'status'];
  dataSource = ELEMENT_DATA;

  getChipClass(status: string): string {
    switch (status) {
      case 'Concluída':
        return 'concluida-chip';
      case 'Aberto':
        return 'aberto-chip';
      case 'Expirado':
        return 'expirado-chip';
      default:
        return '';
    }
  }
}


