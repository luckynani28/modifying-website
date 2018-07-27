import { CinemaService } from './../../cinema.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cinema143',
  templateUrl: './cinema143.component.html',
  styleUrls: ['./cinema143.component.css']
})
export class Cinema143Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  public rediriecting() {
    localStorage.setItem('portpage' , 'portfolio');
  }


}
