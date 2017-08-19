import { Injectable } from '@angular/core';
import { Http } from "@angular/http"

import "rxjs"

@Injectable()
export class RatService {

  constructor(private http: Http) { }

  get_rats(){
    return this.http.get("/all_rats").map(data => data.json()).toPromise()
  }

  post_rat(form_data){
    return this.http.post("/upload", form_data).toPromise()
  }

}
