import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventus',
  templateUrl: './eventus.component.html',
  styleUrls: ['./eventus.component.css']
})
export class EventusComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public rediriecting() {
    localStorage.setItem('portpage' , 'portfolio');
  }
}
