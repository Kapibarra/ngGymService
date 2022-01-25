import { ViewportScroller } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  constructor(private viewportscroller: ViewportScroller) { }

  ngOnInit(): void {
  }
scrollToService(elementId: string) {
  this.viewportscroller.scrollToAnchor(elementId)
}
}
