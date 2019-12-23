import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-content-management-sytem',
  templateUrl: './content-management-sytem.component.html',
  styleUrls: ['./content-management-sytem.component.scss']
})
export class ContentManagementSytemComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

}
