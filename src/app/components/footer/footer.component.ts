import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  mobile = false;
  constructor() { }

  ngOnInit(): void {
    if (window.screen.width <= 968) {
      // 768px portrait
      this.mobile = true;
      console.log('mobile', this.mobile);
    }
  }

}
