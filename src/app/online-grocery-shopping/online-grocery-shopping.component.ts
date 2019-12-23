import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-online-grocery-shopping',
  templateUrl: './online-grocery-shopping.component.html',
  styleUrls: ['./online-grocery-shopping.component.scss']
})
export class OnlineGroceryShoppingComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

}
