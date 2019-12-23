import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-online-food-delivery',
  templateUrl: './online-food-delivery.component.html',
  styleUrls: ['./online-food-delivery.component.scss']
})
export class OnlineFoodDeliveryComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

}
