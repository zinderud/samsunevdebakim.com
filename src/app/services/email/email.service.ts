import { Injectable } from '@angular/core';
import { Http } from '@angular/http'

/*import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';*/

// import 'rxjs/add/operator/map';
// import 'rxjs/add/operator/catch';

@Injectable()
export class EmailService {

  constructor(
    private _http: Http
  ) { }

  public postEmail(data) {
     return this._http.post('https://formspree.io/mokosam@gmail.com', data)
  }

}
