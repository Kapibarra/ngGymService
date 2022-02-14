import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-advantages',
  templateUrl: './advantages.component.html',
  styleUrls: ['./advantages.component.scss']
})
export class AdvantagesComponent implements OnInit, OnDestroy {
  private wowSubscription!: Subscription;
  constructor(private wowService: NgwWowService) { 
    this.wowService.init()
  }

  ngOnInit(): void {
    this.wowSubscription = this.wowService.itemRevealed$.subscribe(
      (item:HTMLElement) => {
        // do whatever you want with revealed element
      });
  }
  ngOnDestroy(): void {
    this.wowSubscription.unsubscribe();
  }

}
