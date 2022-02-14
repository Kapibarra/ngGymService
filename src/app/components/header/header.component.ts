import { ViewportScroller } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  private wowSubscription!: Subscription;
  mobile = false;
  constructor(private viewportscroller: ViewportScroller,private wowService: NgwWowService) {}
  ngOnInit(): void {
    if (window.screen.width <= 968) {
      // 768px portrait
      this.mobile = true;
      console.log('mobile', this.mobile);
    }
    this.wowService.init()
  }
  ngOnDestroy(): void {
    this.wowSubscription.unsubscribe();
  }
  onClickScroll(elementId: string): void {
    this.viewportscroller.scrollToAnchor(elementId);
  }

}
