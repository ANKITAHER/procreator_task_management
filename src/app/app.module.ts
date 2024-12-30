import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'; // Import HttpClientModule
import { MatCardModule } from '@angular/material/card'; // Import MatCardModule
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { AppComponent } from './app.component';
import { TaskService } from './task.service';

import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { AddTaskDialogComponent } from './add-task-dialog/add-task-dialog.component';
import { ConfirmDeleteDialogComponent } from './confirm-delete-dialog/confirm-delete-dialog.component';

@NgModule({
  declarations: [AppComponent, DashboardComponent, AddTaskDialogComponent, ConfirmDeleteDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatCardModule, // Add MatCardModule to the imports
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatOptionModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
