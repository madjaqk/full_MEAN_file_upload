import { Component, OnInit } from '@angular/core';

import { Rat } from "./rat"
import { RatService } from "./rat.service"

@Component({
  selector: 'app-rats',
  templateUrl: './rats.component.html',
  styleUrls: ['./rats.component.css']
})
export class RatsComponent implements OnInit {
  rats: Array<Rat> = []

  constructor(private rat_service: RatService) { }

  ngOnInit() {
    this.get_rats()
  }

  get_rats() {
    this.rat_service.get_rats()
      .then(rats => this.rats = rats)
      .catch(err => console.log("Rat find error", err))
  }

}
