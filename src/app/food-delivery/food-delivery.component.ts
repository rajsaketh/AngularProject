import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-food-delivery',
  templateUrl: './food-delivery.component.html',
  styleUrls: ['./food-delivery.component.scss']
})
export class FoodDeliveryComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

}
