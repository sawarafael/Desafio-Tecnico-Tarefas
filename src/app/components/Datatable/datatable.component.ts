import { SelectionModel } from '@angular/cdk/collections';
import { CommonModule, formatDate } from '@angular/common';
import { Component, Input, ViewChild } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';

export interface Task {
  task: string;
  document: string;
  responsible: string;
  term: string;
  status: string;
}

@Component({
  selector: 'app-datatable',
  styleUrls: ['datatable.component.css'],
  templateUrl: 'datatable.component.html',
  standalone: true,
  imports: [MatTableModule, MatChipsModule, MatCheckboxModule, CommonModule, MatPaginatorModule],
})

export class Datatable {
  @Input() Tasks: any[] = [];

  itemsPerPageLabel = 'Itens por página:';

  displayedColumns: string[] = ['select', 'task', 'document', 'responsible', 'term', 'status'];
  dataSource = new MatTableDataSource<Task>(this.Tasks);
  selection = new SelectionModel<Task>(true, []);

  @ViewChild(MatPaginator) paginator: MatPaginator | undefined;

  ngAfterViewInit() {
    if (this.paginator) {
      this.dataSource.paginator = this.paginator;
    }
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleAllRows() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  checkboxLabel(row?: Task): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.document + 1}`;
  }

  formatarData(data: string): string {
    const date = new Date(data);
    return formatDate(date, 'dd/MM/yyyy', 'en-US');
  }

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


