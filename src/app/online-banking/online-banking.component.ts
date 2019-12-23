import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-online-banking',
  templateUrl: './online-banking.component.html',
  styleUrls: ['./online-banking.component.scss']
})
export class OnlineBankingComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

}
