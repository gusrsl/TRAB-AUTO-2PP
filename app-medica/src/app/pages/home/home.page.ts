import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  slideOpts = {
    initialSlide: 0,
    speed: 400,
    slidesPerView: 2.1,
  };
  sliderItems = [
    { active: true, name: 'Gustavo Rodriguez' },
    { active: false, name: 'Diego Flores' },
    { active: false, name: 'Alcivar Briones' },
    { active: false, name: 'Anthony Palacios' },
  ];
  patientProfiles = [
    {image:'assets/images/prof1.png'},
    {image:'assets/images/prof2.png'},
    {image:'assets/images/prof3.png'},
    {image:'assets/images/prof3.png'}
  ];
  activeSlideIndex = 0;
  constructor() {}

  ngOnInit() {}
}
