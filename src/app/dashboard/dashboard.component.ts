import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TaskService } from '../task.service';
import { Task } from '../task.model';
import { AddTaskDialogComponent } from '../add-task-dialog/add-task-dialog.component';
import { ConfirmDeleteDialogComponent } from '../confirm-delete-dialog/confirm-delete-dialog.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  tasks: Task[] = [];
  filteredTasks: Task[] = [];
  selectedStatus: string = 'All';

  constructor(private taskService: TaskService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks: Task[]) => {
      this.tasks = tasks;
      this.filteredTasks = tasks;
    });
  }

  filterTasks() {
    if (this.selectedStatus === 'All') {
      this.filteredTasks = this.tasks;
    } else {
      this.filteredTasks = this.tasks.filter(
        (task) => task.status === this.selectedStatus
      );
    }
  }

  openAddTaskDialog(): void {
    const dialogRef = this.dialog.open(AddTaskDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        const exists = this.tasks.some(
          (task) =>
            task.title === result.title &&
            task.description === result.description
        );

        if (!exists) {
          this.tasks.push(result);
          this.filterTasks();
        } else {
          alert('Task with the same title and description already exists!');
        }
      }
    });
  }

  openEditTaskDialog(task: Task): void {
    const dialogRef = this.dialog.open(AddTaskDialogComponent, {
      width: '400px',
      data: { ...task },
    });

    dialogRef.afterClosed().subscribe((updatedTask) => {
      if (updatedTask) {
        const index = this.tasks.findIndex(
          (t) => t.title === task.title && t.description === task.description
        );
        if (index !== -1) {
          this.tasks[index] = updatedTask;
          this.filteredTasks[index] = updatedTask;
        }
      }
    });
  }

  confirmDeleteTask(task: Task): void {
    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        this.tasks = this.tasks.filter((t) => t !== task);
        this.filteredTasks = this.filteredTasks.filter((t) => t !== task);
      }
    });
  }
}
