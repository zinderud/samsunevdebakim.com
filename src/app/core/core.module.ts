import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ModalModule } from './modal/modal.module';
 

import { SigninComponent } from './auth/signin.component';
 
import { SignupComponent } from './auth/signup.component';
import { LogoutComponent } from './auth/logout.component';
import { ErrorPageComponent } from './error-page/error-page.component';
 

@NgModule({
  declarations: [
    SigninComponent,
    
    SignupComponent,
    LogoutComponent,
    ErrorPageComponent,
  
  ],
  imports: [CommonModule, HttpModule, FormsModule, ReactiveFormsModule, ModalModule],
  exports: [LogoutComponent, ModalModule, SigninComponent,]
})
export class CoreModule { }