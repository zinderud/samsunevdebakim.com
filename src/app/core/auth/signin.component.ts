import { ModelResponse, RestSession, AuthenticationService } from '../../app.backend';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
 
import { Response } from '@angular/http';

@Component({
  selector: 'rb-signin',
  template: `
<div>
    
    <form [formGroup]="myForm" (ngSubmit)="onSignin()">
        <div class="form-group">
            <input formControlName="userName" placeholder="User Name" type="text" id="userName" class="form-control">
        </div>
        <div class="form-group">
            <input formControlName="password" id="password" placeholder="Password" type="password" class="form-control">
            <div class="help-block text-right"><a href="">Forget the password ?</a></div>
        </div>
        <div class="form-group">
            <input type="submit" [disabled]="!myForm.valid" value="Sing in" class="button special fit" />
        </div>
    </form>
</div>
  `
})
export class SigninComponent implements OnInit {
  myForm: FormGroup;
  error = false;
  errorMessage = '';

  constructor(private fb: FormBuilder  ) { }

  onSignin() {
   
  }

  ngOnInit(): any {
    this.myForm = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
}
