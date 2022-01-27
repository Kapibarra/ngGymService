import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.scss']
})
export class PartnersComponent implements OnInit {

  imageObject = [{
    image: '../../../assets/img/partners1.png',
    thumbImage: '../../../assets/img/partners1.png',
}, {
  image: '../../../assets/img/partners2.png',
  thumbImage: '../../../assets/img/partners2.png',
}, {
  image: '../../../assets/img/partners3.png',
  thumbImage: '../../../assets/img/partners3.png',
},{
  image: '../../../assets/img/partners4.png',
  thumbImage: '../../../assets/img/partners4.png',
}, {
  image: '../../../assets/img/partners5.png',
  thumbImage: '../../../assets/img/partners5.png',
},
{
  image: '../../../assets/img/partners6.png',
  thumbImage: '../../../assets/img/partners6.png',
}, {
  image: '../../../assets/img/partners7.png',
  thumbImage: '../../../assets/img/partners7.png',
}];
  constructor() { }

  ngOnInit(): void {
  }

}
