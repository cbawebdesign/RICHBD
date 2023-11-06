import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html'
})
export class AboutUsComponent implements OnInit {

  List : any ={
    title:"WHAT WE DO",
    subtitle : "Insurance Services",
    desc : "Contact us today to find out how we can help secure you and your family's future."
  };


  constructor() { }

  ngOnInit() {
  }

}
