import { Component, OnInit, ViewChild, ElementRef, Input } from '@angular/core';

@Component({
  selector: 'app-slide-content',
  templateUrl: './slide-content.component.html',
  styleUrls: ['./slide-content.component.scss']
})
export class SlideContentComponent implements OnInit {

  @ViewChild('slideWrapper') content:ElementRef;

  @Input('name') name: string;
  @Input('type') type: string;
  @Input('nav') nav: boolean;
  @Input('animation') animation: any;

  constructor() { }

  slideAnimation() {
    let slideAnimationInitial = setInterval(() => {
        this.nextHandler()
      }, 6000);

      slideAnimationInitial

      if(this.animation) {
        clearInterval(slideAnimationInitial)
        let slideAnimationOptions = setInterval(() => {
          if(this.animation.direction == "prev") {
            this.prevHandler()
          } else {
            this.nextHandler()
          }
        }, this.animation.time);

        if(this.animation.disabled) {
          clearInterval(slideAnimationOptions)
        } else {
          slideAnimationOptions
        }
      }
  }

  prevHandler() {
    let slides = this.content.nativeElement.querySelectorAll("app-slide-item"),
        slides__item = this.content.nativeElement.querySelectorAll("app-slide-item .slide-item")

    for(let item of slides) {
      if(item.querySelector('.slide-item').classList.contains("actived")) {
        if(item.previousElementSibling) {
          item.querySelector('.slide-item').classList.remove("actived")
          item.previousElementSibling.querySelector('.slide-item').classList.add("actived")
        } else {
          item.querySelector('.slide-item').classList.remove("actived")
          slides__item[slides.length - 1].classList.add("actived")
        }
        break;
      }
    }
  }

  nextHandler() {
    let slides = this.content.nativeElement.querySelectorAll("app-slide-item"),
        slides__item = this.content.nativeElement.querySelectorAll("app-slide-item .slide-item")

    for(let item of slides) {
      if(item.querySelector('.slide-item').classList.contains("actived")) {
        if(item.nextElementSibling) {
          item.querySelector('.slide-item').classList.remove("actived")
          item.nextElementSibling.querySelector('.slide-item').classList.add("actived")
          break;
        } else {
          item.querySelector('.slide-item').classList.remove("actived")
          slides__item[0].classList.add("actived")
        }
      }
    }
  }

  ngOnInit() {
    this.slideAnimation()
  }

}
