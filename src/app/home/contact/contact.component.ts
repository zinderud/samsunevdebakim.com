import { Component, OnInit, OnDestroy } from '@angular/core';
 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmailService } from '../../services/email/email.service';
import { NotificationService } from '../../services/notification/notification.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'rb-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
    providers: [ 
              EmailService,
              NotificationService 
               ]
})
export class ContactComponent {
    public complexForm: FormGroup;
    public email: any;

    constructor(   
          private _notificationService: NotificationService,
          private _emailService: EmailService,
       private _formBuilder: FormBuilder
      ) {
   this.complexForm = _formBuilder.group({
      'name': [null, Validators.compose([Validators.required, Validators.minLength(3)])],
      'email': [null, Validators.compose([Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')])],
      'message': [null, Validators.compose([Validators.required, Validators.minLength(20)])]
    });
      
    }

      public submitForm(value) {
    if (!value.name || !value.email || !value.message) { return; }
    if (this.complexForm.status === 'VALID') {
        return this.email = this._emailService.postEmail(value)
          .subscribe(data => {
            const string = value.message;
            const length = 60;
            const trimmedString = string.substring(0, length);
            this._notificationService.notifitem('email', `${value.name} Your Email Was Sent`, trimmedString, true);
            this.complexForm.reset()
          }) as Subscription;
    }
    return;
  }
}
