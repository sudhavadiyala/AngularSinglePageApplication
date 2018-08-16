import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {
  private var_four: string;
  constructor() {
    this.var_four = "I am from child one";
   }

  ngOnInit() {
  }

}
