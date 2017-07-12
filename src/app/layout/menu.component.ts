import { User, RestSession } from '../app.backend';
import { Component, OnInit, AfterViewInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
 

@Component({
  selector: 'rb-menu',
  template: `
<nav id="menu">
  <ul class="links">

   

    <li><a [routerLink]="['Anasayfa']">Anasayfa</a></li>
      <li><a [routerLink]="['Tanisma']">Tanışalım</a></li> 
    <li><a [routerLink]="['Hizmetlerimiz']">Hizmetlerimiz</a></li>
    <li><a [routerLink]="['Bizkimiz']">Bizkimiz</a></li>
   <li><a [routerLink]="['Amacimiz']">Amacımız</a></li> 

    <rb-signin *ngIf="!isAuth()"></rb-signin>

 

  </ul>
</nav>
  `,
  styleUrls: ['./menu.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class MenuComponent implements OnInit, AfterViewInit {

  sessionUser: User;
  hasArtistProfile: boolean;
  avatarDataSquare: any = {
    size: 40,
    background: '#F39C12', // by default it will produce dynamic colors
    fontColor: '#FFFFFF',
    border: '2px solid #d3d3d3',
    isSquare: true
  };

  constructor(private router: Router) {
    
  }

  ngOnInit() {
   
  }

  ngAfterViewInit(): void {
    
  }

  isAuth() {
 
  }

  onAvatarClick() {
    this.router.navigate(['/artist-create']);
  }
}
