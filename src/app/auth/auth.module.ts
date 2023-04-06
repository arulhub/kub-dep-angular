import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SignInComponent } from './sign-in/sign-in.component';
import { ErrorComponent } from './error/error.component';



@NgModule({
  declarations: [
    SignInComponent,
    ErrorComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AuthModule { }
