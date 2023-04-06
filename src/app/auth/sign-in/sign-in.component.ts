import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'src/app/local-storage.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(
    private authSVC: AuthService,
    private toastSVC: ToastrService,
    private localSVC: LocalStorageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSignIn(email: string, pwd: string) {    
    let data = {
      email: email,
      password: pwd
    };
    this.authSVC.signin(data).subscribe({
      next: (resp) => {
        this.localSVC.clear();
        Object.entries(resp).forEach(entry => {
          const [key, value] = entry;
          console.log(`Key = ${key} and value = ${value}`);
          this.localSVC.setItem(key, value);
          this.router.navigateByUrl('/tasks/view');
        });        
      },
      error: (error) => {
        console.log(error);        
        this.toastSVC.error(error.message ? error.message : error, 'Error in sign In');
      }
    });
  }
}
