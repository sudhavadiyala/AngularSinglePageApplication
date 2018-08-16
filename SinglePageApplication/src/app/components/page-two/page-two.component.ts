import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-page-two',
  templateUrl: './page-two.component.html',
  styleUrls: ['./page-two.component.css']
})
export class PageTwoComponent implements OnInit {
  private var_two: string;
  constructor() { 
    this.var_two = "I am from Page Two";
  }

  ngOnInit() {
  }

}
