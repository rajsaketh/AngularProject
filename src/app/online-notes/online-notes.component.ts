import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-online-notes',
  templateUrl: './online-notes.component.html',
  styleUrls: ['./online-notes.component.scss']
})
export class OnlineNotesComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit() {
  }

}
