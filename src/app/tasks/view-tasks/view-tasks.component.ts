import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'src/app/local-storage.service';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-view-tasks',
  templateUrl: './view-tasks.component.html',
  styleUrls: ['./view-tasks.component.css']
})
export class ViewTasksComponent implements OnInit {

  tasks: any;

  constructor(
    private localSVC: LocalStorageService,
    private toastSVC: ToastrService,
    private router: Router,
    private tasksSVC: TasksService,
  ) { }

  ngOnInit(): void {
    const user = this.localSVC.getItem('userId');
    const token = this.localSVC.getItem('token');

    if(!user) {
      this.toastSVC.warning('Please sign in to continue', 'Un-Authorized');
      this.router.navigateByUrl('/auth/sign-in');
    }
    
    this.tasksSVC.viewTasks().subscribe({
      next: resp => {
        this.tasks = resp;
      }
    });
  }

}
