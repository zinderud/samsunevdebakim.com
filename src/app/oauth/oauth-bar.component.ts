/*import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
 

@Component({
  selector: 'rb-oauth-bar',
  template: `
              <a *ngIf="hasDriveCredential" class="btn btn-block btn-social btn-twitter">
                <span class="fa fa-twitter"></span> Tiene
              </a>
              <a *ngIf="!hasDriveCredential" [href]="driveReadOnlyPermitUrl" class="btn btn-block btn-social btn-twitter">
                <span class="fa fa-twitter"></span> No Tiene
              </a>

              <a *ngIf="hasYoutubeCredential" class="btn btn-block btn-social btn-youtube">
                <span class="fa fa-youtube"></span> Tiene
              </a>
              <a *ngIf="!hasYoutubeCredential" [href]="youtubeReadOnlyPermitUrl" class="btn btn-block btn-social btn-youtube">
                <span class="fa fa-youtube"></span> No Tiene
              </a>
            `
})
export class OauthBarComponent implements OnInit {

  public hasYoutubeCredential: Boolean = false;
  public youtubeReadOnlyPermitUrl: String;
  public hasDriveCredential: Boolean = false;
  public driveReadOnlyPermitUrl: String;

  constructor(private activatedRoute: ActivatedRoute,  ) {
  }

  ngOnInit() {
    this.activatedRoute.queryParams.subscribe((params: Params) => {
      const credential = params['credential'];
      const authCode = params['code'];
      
    });

    

    
  }
}
*/