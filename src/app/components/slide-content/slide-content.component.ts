import { Component, OnInit, AfterViewInit, OnDestroy, ViewChild, ElementRef, Input } from '@angular/core';
import { interval, Subscription } from 'rxjs';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-slide-content',
  templateUrl: './slide-content.component.html',
  styleUrls: ['./slide-content.component.scss']
})
export class SlideContentComponent implements OnInit, AfterViewInit, OnDestroy {

  @ViewChild('slideWrapper', { static: true }) content: ElementRef<HTMLDivElement>;

  @Input() name: string;
  @Input() type: string;
  @Input() squared: boolean;
  @Input() border: boolean;
  @Input() nav: boolean;
  @Input() animation: any;

  private slideAnimationInitialSub: Subscription;
  private slideAnimationOptionsSub: Subscription;

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.startSlideAnimation();
  }

  ngOnDestroy() {
    this.stopSlideAnimation();
  }

  startSlideAnimation() {
    this.slideAnimationInitialSub = interval(6000)
      .pipe(takeWhile(() => !this.animation))
      .subscribe(() => this.nextHandler());

    if (this.animation) {
      this.slideAnimationOptionsSub = interval(this.animation.time)
        .subscribe(() => {
          this.animation.direction === 'prev' ? this.prevHandler() : this.nextHandler();
        });

      if (this.animation.disabled) {
        this.stopSlideAnimation();
      }
    }
  }

  stopSlideAnimation() {
    if (this.slideAnimationInitialSub) {
      this.slideAnimationInitialSub.unsubscribe();
    }
    if (this.slideAnimationOptionsSub) {
      this.slideAnimationOptionsSub.unsubscribe();
    }
  }

  prevHandler() {
    const slides = Array.from(this.content.nativeElement.querySelectorAll('app-slide-item .slide-item')) as HTMLElement[];
    const activeSlide = slides.find(slide => slide.classList.contains('actived'));

    if (activeSlide) {
      activeSlide.classList.remove('actived');
      const prevSlide = activeSlide.parentElement?.previousElementSibling?.querySelector('.slide-item') as HTMLElement;
      if (prevSlide) {
        prevSlide.classList.add('actived');
      } else {
        slides[slides.length - 1].classList.add('actived');
      }
    }
  }

  nextHandler() {
    const slides = Array.from(this.content.nativeElement.querySelectorAll('app-slide-item .slide-item')) as HTMLElement[];
    const activeSlide = slides.find(slide => slide.classList.contains('actived'));

    if (activeSlide) {
      activeSlide.classList.remove('actived');
      const nextSlide = activeSlide.parentElement?.nextElementSibling?.querySelector('.slide-item') as HTMLElement;
      if (nextSlide) {
        nextSlide.classList.add('actived');
      } else {
        slides[0].classList.add('actived');
      }
    }
  }
}
