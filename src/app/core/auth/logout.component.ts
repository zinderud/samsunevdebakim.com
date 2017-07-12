import { Component } from '@angular/core';
 
@Component({
  selector: 'rb-logout',
  template: `<a   (click)="onLogout()" style="cursor: pointer;" class="icon fa-power-off"></a>`
})
export class LogoutComponent {
  constructor() { }

  isAuth() {
 
  }

  onLogout() {
  
  }
}
