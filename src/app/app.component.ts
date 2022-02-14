import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  animations: [],
})
export class AppComponent implements OnInit {
  title = 'Gym - Service';
  active = false;
  constructor(private wowService: NgwWowService) {
    this.wowService.init();
  }
  ngOnInit(): void {}
}
