import { Component, OnInit, ViewChild } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-slideshow',
  templateUrl: './slideshow.component.html',
  styleUrls: ['./slideshow.component.scss']
})
export class SlideshowComponent implements OnInit {

  role: Number;
  public selectedindex: number = 0;
  public images = ['../../../assets/img/internacion.png', '../../../assets/img/clinica.png', '../../../assets/img/quirofano.png',
    '../../../assets/img/internacion.png', '../../../assets/img/clinica.png', '../../../assets/img/quirofano.png'];

  selectImage(index: number) {
    console.log("Index: " + index);
    this.selectedindex = index;
    console.log("Selected Index: " + this.selectedindex);
  }

  showSlides() {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
      (<HTMLElement>slides[i]).style.display = "none";
    }
    this.selectedindex++
    if (this.selectedindex > slides.length) { this.selectedindex = 1 }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    (<HTMLElement>slides[this.selectedindex - 1]).style.display = "none";
    dots[this.selectedindex - 1].className += " active";
    setTimeout(this.showSlides, 2000);
  }

  showSlide(index: number) {
    let i
    let idx = index
    let slides = document.getElementsByClassName('mySlides')
    let dots = document.getElementsByClassName('dot')
    console.log(slides.length, idx, dots.length, this.images.length, 'algo mas')
    for (i = 0; i < slides.length; i++) {
      (<HTMLElement>slides[i]).classList.add('image-active')
      if (i > 1) {
        (<HTMLElement>slides[i - 1]).classList.remove('image-active')
      }
      console.log(<HTMLElement>slides[i], 'i', <HTMLElement>slides[i - 1], 'i-1')
      console.log('entra al else')

      dots[i].className = dots[i].className.replace('active', '')
      // setTimeout(() => {
      //   this.showSlide(this.images.length)
      // }, 2000);
    }


  }


  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router) {
    this.role = 1;

  }

  ngOnInit() {

    setTimeout(() => {
      this.showSlide(this.images.length)
    }, 2000);
  }

}
