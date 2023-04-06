import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LocalStorageService } from 'src/app/local-storage.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor(
    private authSVC: AuthService,
    private toastSVC: ToastrService,
    private localSVC: LocalStorageService,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  onSignUp(email: string, pwd: string) {
    let data = {
      email: email,
      password: pwd
    };
    this.authSVC.signup(data).subscribe({
      next: (resp) => {
        console.log(resp);
        this.toastSVC.success('User creation successfull.', 'Success');
        this.router.navigateByUrl('/auth/sign-in');
      }
    });
  }

}
