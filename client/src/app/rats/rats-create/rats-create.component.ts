import { Component, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';

import { Rat } from "./../rat"
import { RatService } from "./../rat.service"

@Component({
  selector: 'app-rats-create',
  templateUrl: './rats-create.component.html',
  styleUrls: ['./rats-create.component.css']
})
export class RatsCreateComponent implements OnInit {
  new_rat: Rat = new Rat

  @ViewChild("file") file_input
  @ViewChild("form") my_form
  @Output() new_rat_event = new EventEmitter

  constructor(private rat_service: RatService) { }

  ngOnInit() {
  }

  create_rat(){
    let form_data = new FormData(this.my_form.nativeElement)

    this.rat_service.post_rat(form_data)
      .then(() => {
        this.new_rat = new Rat
        this.file_input.nativeElement.value = ""
        this.new_rat_event.emit()
      })
  }
}
