import { Component, OnInit } from '@angular/core';

 
@Component({
  selector: 'rb-root',
  template: `
<!-- Wrapper -->
<div id="wrapper">
 

	<!-- Header -->
	<rb-header></rb-header>

	<!-- Menu -->
	<rb-menu></rb-menu>

  <!-- Body -->
  <rb-body></rb-body>

	<!-- Footer -->
	<rb-footer></rb-footer>

</div>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
 
  constructor(  ) { }

  ngOnInit() {
     
  }
}
