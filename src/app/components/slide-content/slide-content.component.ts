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

  slides: HTMLElement[] = [];
  activeSlideIndex: number = 0;

  private slideAnimationInitialSub: Subscription;
  private slideAnimationOptionsSub: Subscription;

  constructor() { }

  ngOnInit() {}

  ngAfterViewInit() {
    this.slides = Array.from(this.content.nativeElement.querySelectorAll('app-slide-item .slide-item')) as HTMLElement[];
    if (this.slides.length) {
      const initialActiveSlide = this.slides.findIndex(slide => slide.classList.contains('actived'));
      if (initialActiveSlide !== -1) {
        this.activeSlideIndex = initialActiveSlide;
      } else {
        this.slides[0].classList.add('actived');
      }
    }
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
    if (this.slides.length) {
      this.slides[this.activeSlideIndex].classList.remove('actived');
      this.activeSlideIndex = (this.activeSlideIndex - 1 + this.slides.length) % this.slides.length;
      this.slides[this.activeSlideIndex].classList.add('actived');
    }
  }

  nextHandler() {
    if (this.slides.length) {
      this.slides[this.activeSlideIndex].classList.remove('actived');
      this.activeSlideIndex = (this.activeSlideIndex + 1) % this.slides.length;
      this.slides[this.activeSlideIndex].classList.add('actived');
    }
  }

  bulletHandler(index: number) {
    if (this.slides.length) {
      this.slides[this.activeSlideIndex].classList.remove('actived');
      this.activeSlideIndex = index;
      this.slides[this.activeSlideIndex].classList.add('actived');
    }
  }
}
