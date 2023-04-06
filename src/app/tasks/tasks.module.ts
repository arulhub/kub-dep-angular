import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CreateTasksComponent } from './create-tasks/create-tasks.component';
import { ViewTasksComponent } from './view-tasks/view-tasks.component';
import { RouterModule, Routes } from '@angular/router';
import { MatModule } from '../mat/mat.module';

const routes: Routes = [
  {
    path: 'create',
    component: CreateTasksComponent,
  },
  {
    path: 'view',
    component: ViewTasksComponent,    
  },  
];

@NgModule({
  declarations: [
    CreateTasksComponent,
    ViewTasksComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MatModule,
  ],
  exports: [
    RouterModule,
  ],
})
export class TasksModule { }
