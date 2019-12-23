import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  username: String;
  password: String;


  constructor(private route:Router) { }

  ngOnInit() {
  }
onsubmit()
{ 
  this.route.navigate(['cart'])
}
submit(){
  this.route.navigate(['register'])}
}