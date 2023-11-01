import { SelectionModel } from '@angular/cdk/collections';
import { CommonModule, formatDate } from '@angular/common';
import { Component, Input, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatPaginator, MatPaginatorModule } from '@angular/material/paginator';
import { MatSelectModule } from '@angular/material/select';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DialogComponent } from '../Dialog/dialog.component';

export interface Task {
  id: number
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
  imports: [MatTableModule, MatChipsModule, MatCheckboxModule, CommonModule, MatPaginatorModule, MatInputModule, MatFormFieldModule, MatSelectModule],
  providers: [MatDialog],
})

export class Datatable implements OnInit  {
  @Input() Tasks: any[] = [];
  @ViewChild('paginator') paginator!: MatPaginator;

  displayedColumns: string[] = ['select', 'task', 'document', 'responsible', 'term', 'status'];
  dataSource = new MatTableDataSource<Task>(this.Tasks);
  selection = new SelectionModel<Task>(true, []);

  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator
    console.log(this.dataSource.data, this.Tasks)
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['Tasks'] && changes['Tasks'].currentValue) {
      this.dataSource = new MatTableDataSource<Task>(changes['Tasks'].currentValue);
      this.dataSource.paginator = this.paginator;
    }
  }

  applyFilter(selectedStatus: string): void {
    if (selectedStatus === 'Todos') {
      this.dataSource.filter = '';
    } else {
      this.dataSource.filter = selectedStatus.trim().toLowerCase();
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

  formatData(data: string): string {
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

  openTaskDetailsDialog(task: Task): void {
    const dialogRef = this.dialog.open(DialogComponent, {
      width: '400px',
      data: task,
    });

    dialogRef.afterClosed().subscribe((result) => {

    });
  }
}


