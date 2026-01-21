import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TodoDashboardComponent } from './shared/components/todo-dashboard/todo-dashboard.component';
import { TodoFormComponent } from './shared/components/todo-form/todo-form.component';
import { TodoListComponent } from './shared/components/todo-list/todo-list.component';
import { GetConfirmComponent } from './shared/components/get-confirm/get-confirm.component';
import {MatButtonModule} from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { FormsModule } from '@angular/forms';
import { StudentDashboardComponent } from './shared/components/student-dashboard/student-dashboard.component';
import { StudentFormComponent } from './shared/components/student-form/student-form.component';
import { StudentListComponent } from './shared/components/student-list/student-list.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoDashboardComponent,
    TodoFormComponent,
    TodoListComponent,
    GetConfirmComponent,
    StudentDashboardComponent,
    StudentFormComponent,
    StudentListComponent,
   
   
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatSnackBarModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
