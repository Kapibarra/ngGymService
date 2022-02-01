import { Component, OnInit } from '@angular/core';

interface Gallery {
  src: string;
  id? : number,
}

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent implements OnInit {
  images: Gallery[] = [
    {
      src: '../../../assets/img/gallery1.png',
    },
    {
      src: '../../../assets/img/gallery2.png',
    },
    {
      src: '../../../assets/img/gallery3.png',
    },
    {
      src: '../../../assets/img/gallery4.png',
    },
    {
      src: '../../../assets/img/gallery5.png',
    },
    {
      src: '../../../assets/img/gallery6.png',
    },
    {
      src: '../../../assets/img/gallery7.png',
    },
    {
      src: '../../../assets/img/gallery8.png',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
