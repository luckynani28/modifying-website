import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-easylead',
  templateUrl: './easylead.component.html',
  styleUrls: ['./easylead.component.css']
})
export class EasyleadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public rediriecting() {
    localStorage.setItem('portpage' , 'portfolio');
  }
}
