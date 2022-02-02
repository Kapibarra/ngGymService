import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html',
  styleUrls: ['./cta.component.scss']
})
export class CtaComponent implements OnInit {
  mobile = false;
  desktop = false;
  form!: FormGroup
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

    this.form = new FormGroup({
      phone: new FormControl('', [
        Validators.required,
      ]),
      name: new FormControl(null, [
        Validators.required,
        Validators.minLength(3)
      ])
    })
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
