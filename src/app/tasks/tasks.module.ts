import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTasksComponent } from './create-tasks/create-tasks.component';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';



@NgModule({
  declarations: [
    CreateTasksComponent,
    ViewTasksComponent
  ],
  imports: [
    CommonModule
  ]
})
export class TasksModule { }
