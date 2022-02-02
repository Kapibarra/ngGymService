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
  removeVisible() {
      
  }
  mailSend() {
    const timeOut = new Promise((resolve, reject) => {
    setTimeout(() => {
      const popup = document.getElementById('popup')
      popup!.classList.add('visible')
      console.log('this', popup);
          }, 3000)
   })
   setTimeout(() => {
     const popup = document.getElementById('popup')
     popup!.classList.remove('visible')
     console.log('removed');
     
   }, 5000)
  }
  closeModal() {
    const popup = document.getElementById('popup')
    popup!.classList.remove('visible')
  }
  
}
