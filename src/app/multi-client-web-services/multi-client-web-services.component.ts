import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-multi-client-web-services',
  templateUrl: './multi-client-web-services.component.html',
  styleUrls: ['./multi-client-web-services.component.scss']
})
export class MultiClientWebServicesComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

}
