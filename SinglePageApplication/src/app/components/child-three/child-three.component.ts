import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-three',
  templateUrl: './child-three.component.html',
  styleUrls: ['./child-three.component.css']
})
export class ChildThreeComponent implements OnInit {
  private var_six: string;
  constructor() {
    this.var_six = "I am from child three";
   }

  ngOnInit() {
  }

}
