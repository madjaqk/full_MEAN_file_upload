import { Component, OnInit, Input } from '@angular/core';

import { Rat } from "./../rat"
import { RatService } from "./../rat.service"

@Component({
  selector: 'app-rats-details',
  templateUrl: './rats-details.component.html',
  styleUrls: ['./rats-details.component.css']
})
export class RatsDetailsComponent implements OnInit {
  @Input() rat: Rat

  constructor() { }

  ngOnInit() {
  }

}
