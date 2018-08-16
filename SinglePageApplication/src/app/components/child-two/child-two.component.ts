import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {
  private var_five: string;
  constructor() {
    this.var_five = "I am from child two";
   }

  ngOnInit() {
  }

}
