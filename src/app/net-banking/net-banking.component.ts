import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-net-banking',
  templateUrl: './net-banking.component.html',
  styleUrls: ['./net-banking.component.scss']
})
export class NetBankingComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

}
