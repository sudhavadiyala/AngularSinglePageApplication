import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-one',
  templateUrl: './page-one.component.html',
  styleUrls: ['./page-one.component.css']
})
export class PageOneComponent implements OnInit {
  private var_one: string;
  constructor() {
    this.var_one = "I am from Page One";
   }

  ngOnInit() {
  }

}
