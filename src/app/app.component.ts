import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from './auth/auth.service';
import { LocalStorageService } from './local-storage.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'kub-dep-angular';
  constructor(
    private localSVC: LocalStorageService,
    private router: Router,
  ){}
  ngOnInit(): void {
    this.localSVC.clear();
  }
  logout() {
    this.localSVC.clear();
    this.router.navigateByUrl('/auth/sign-in');
  }
}
