import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent implements OnInit {
  mobile = false;
  desktop = false;
  constructor() { }

  ngOnInit(): void {
    if (window.screen.width >= 968) {
      // 768px portrait
      this.desktop = true;
      console.log('desktop', this.desktop);
    }
    if (window.screen.width <= 968) {
      // 768px portrait
      this.mobile = true;
      console.log('mobile', this.mobile);
    }
  }

}
