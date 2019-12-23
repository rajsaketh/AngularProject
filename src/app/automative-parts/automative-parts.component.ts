import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-automative-parts',
  templateUrl: './automative-parts.component.html',
  styleUrls: ['./automative-parts.component.scss']
})
export class AutomativePartsComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }
 
}
