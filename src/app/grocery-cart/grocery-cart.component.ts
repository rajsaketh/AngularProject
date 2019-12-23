import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-grocery-cart',
  templateUrl: './grocery-cart.component.html',
  styleUrls: ['./grocery-cart.component.scss']
})
export class GroceryCartComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

}
