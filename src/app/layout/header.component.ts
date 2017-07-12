import { Component } from '@angular/core';

@Component({
  selector: 'rb-header',
  template: `
<header id="header" class="alt">
  <a [routerLink]="['/']" class="logo"><strong>Samsun</strong> <span>EvdeBakım</span></a>

  <nav>
      <a href="#" class="icon alt fa-phone"><span class="label">Telefon</span> 0532-000-00-00</a> 
 
    <a href="#menu">Menu</a>
  </nav>
</header>
  `,
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
}
