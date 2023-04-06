import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'src/app/local-storage.service';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-create-tasks',
  templateUrl: './create-tasks.component.html',
  styleUrls: ['./create-tasks.component.css']
})
export class CreateTasksComponent implements OnInit {

  constructor(
    private localSVC: LocalStorageService,
    private toastSVC: ToastrService,
    private router: Router,
    private taskSVC: TasksService,
  ) { }

  ngOnInit(): void {
    const user = this.localSVC.getItem('userId');
    if(!user) {
      this.toastSVC.warning('Please sign in to continue', 'Un-Authorized');
      this.router.navigateByUrl('/auth/sign-in');
    }
  }

  onCreate(title: string, text: string) {
    let data = { title, text };
    this.taskSVC.createTasks(data).subscribe({
      next: (resp) => {
        this.toastSVC.success('Task created successfully!', 'Success');
        this.router.navigateByUrl('/tasks/view');
      }
    });
  }

}
