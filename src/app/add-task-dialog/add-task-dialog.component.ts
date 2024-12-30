import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Task } from '../task.model';
@Component({
  selector: 'app-add-task-dialog',
  templateUrl: './add-task-dialog.component.html',
  styleUrls: ['./add-task-dialog.component.css'],
})
export class AddTaskDialogComponent {
  newTask: Task = {
    title: '',
    description: '',
    priority: 'Low',
    status: 'Pending',
  };

  constructor(
    public dialogRef: MatDialogRef<AddTaskDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.newTask = data
      ? { ...data }
      : { title: '', description: '', priority: 'Low', status: 'Pending' };
  }

  onCancel(): void {
    this.dialogRef.close();
  }

  onSaveTask(): void {
    if (this.newTask.title && this.newTask.description) {
      this.dialogRef.close(this.newTask);
    }
  }
}
