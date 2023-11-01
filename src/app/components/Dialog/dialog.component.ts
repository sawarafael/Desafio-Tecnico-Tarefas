import { formatDate } from '@angular/common';
import { Component, Inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { MatSelectModule } from '@angular/material/select';
import { TaskService } from 'src/app/services/task/task.service';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.css'],
  standalone: true,
  imports: [MatSelectModule, FormsModule],

})
export class DialogComponent {
  selectedStatus: string | undefined;

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, public dialogRef: MatDialogRef<DialogComponent>, private taskService: TaskService) {
    console.log(data.id);
  }

  formatarData(data: string): string {
    const date = new Date(data);
    return formatDate(date, 'dd/MM/yyyy', 'en-US');
  }

  atualizarStatus() {
    if (this.data.id && this.selectedStatus) {
      const taskIndex = this.data.id;
      const novoStatus = this.selectedStatus;

      this.taskService.updateTaskStatus(taskIndex, novoStatus);

      this.dialogRef.close();
    }
  }
}
