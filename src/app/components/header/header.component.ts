import { ViewportScroller } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  mobile = false;
  constructor(private viewportscroller: ViewportScroller) {
  }
  ngOnInit(): void {
    if (window.screen.width <= 968) {
      // 768px portrait
      this.mobile = true;
      console.log('mobile', this.mobile);
    }
  }
  ngOnDestroy(): void {
  }
  onClickScroll(elementId: string): void {
    this.viewportscroller.scrollToAnchor(elementId);
  }

}
