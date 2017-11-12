import { Component } from '@angular/core';
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map' ;
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users;


  constructor (public http:Http){
    this.getUser().subscribe(
      res=> this.users = res._embedded.user ,
      error =>console.log(error)

    );


  }


  getUser(): Observable<any>{

   return this.http.get("http://localhost:8080/user").map
   (respnse=> <string[]> respnse.json()) ;
  }
}
