import {
  Component,
  OnInit,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  Input,
} from "@angular/core";
import { interval, Subscription } from "rxjs";
import { takeWhile } from "rxjs/operators";
import * as Hammer from "hammerjs";

@Component({
  selector: "slide-content",
  templateUrl: "./slide-content.component.html",
  styleUrls: ["./slide-content.component.scss"],
})
export class SlideContent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild("slideWrapper", { static: true })
  content: ElementRef<HTMLDivElement>;

  @Input() name: string;
  @Input() type: string;
  @Input() squared: boolean;
  @Input() border: boolean;
  @Input() nav: boolean;
  @Input() animation: any;

  slides: HTMLElement[] = [];
  activeSlideIndex: number = 0;
  private url: string;

  private slideAnimationInitialSub: Subscription;
  private slideAnimationOptionsSub: Subscription;
  private hammer: HammerManager;
  private isDragging = false;
  private startPanX: number = 0;
  private minPanDistance: number = 100;

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.slides = Array.from(
        this.content.nativeElement.querySelectorAll("slide-item .slide-item")
      ) as HTMLElement[];
      if (this.slides.length) {
        const initialActiveSlide = this.slides.findIndex((slide) =>
          slide.classList.contains("actived")
        );
        if (initialActiveSlide !== -1) {
          this.activeSlideIndex = initialActiveSlide;
          this.updateAriaHidden(); // Atualiza aria-hidden no slide inicialmente ativo
          this.url =
            this.slides[this.activeSlideIndex].getAttribute("data-url") || "";
        } else {
          this.slides[0].classList.add("actived");
          this.updateAriaHidden(); // Atualiza aria-hidden no primeiro slide se nenhum estiver marcado inicialmente
          this.url = this.slides[0].getAttribute("data-url") || "";
        }
      }
      this.setupHammer();
      this.startSlideAnimation();
    });
  }

  ngOnDestroy() {
    this.stopSlideAnimation();
    if (this.hammer) {
      this.hammer.destroy();
    }
  }

  setupHammer() {
    this.hammer = new Hammer(this.content.nativeElement);
    this.hammer.get("pan").set({ direction: Hammer.DIRECTION_HORIZONTAL });
    this.hammer.on("panstart", (event) => this.onPanStart(event));
    this.hammer.on("pan", (event) => this.onPanMove(event));
    this.hammer.on("panend", (event) => this.onPanEnd(event));
  }

  onPanStart(event: any) {
    this.isDragging = true;
    this.startPanX = event.center.x; // Inicia a posição X do pan
    this.content.nativeElement.style.cursor = "grabbing";
  }

  onPanMove(event: any) {
    if (!this.isDragging) {
      return;
    }

    const delta = event.center.x - this.startPanX;
    const absDelta = Math.abs(delta);

    // Verifica se a distância percorrida é maior ou igual à distância mínima para ativar a troca de slide
    if (absDelta >= this.minPanDistance) {
      if (delta < 0) {
        // Pan para a esquerda
        this.nextHandler();
      } else {
        // Pan para a direita
        this.prevHandler();
      }

      // Reinicia a posição inicial para o próximo pan
      this.startPanX = event.center.x;
    }
  }

  onPanEnd(event: any) {
    this.content.nativeElement.style.cursor = "grab";
    setTimeout(() => {
      this.isDragging = false;
    }, 500);
  }

  startSlideAnimation() {
    this.slideAnimationInitialSub = interval(6000)
      .pipe(takeWhile(() => !this.animation))
      .subscribe(() => this.nextHandler());

    if (this.animation) {
      this.slideAnimationOptionsSub = interval(this.animation.time).subscribe(
        () => {
          this.animation.direction === "prev"
            ? this.prevHandler()
            : this.nextHandler();
        }
      );

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
      this.slides[this.activeSlideIndex].classList.remove("actived");
      this.updateAriaHidden();
      this.activeSlideIndex =
        (this.activeSlideIndex - 1 + this.slides.length) % this.slides.length;
      this.slides[this.activeSlideIndex].classList.add("actived");
      this.updateAriaHidden();
      this.url =
        this.slides[this.activeSlideIndex].getAttribute("data-url") || "";
    }
  }

  nextHandler() {
    if (this.slides.length) {
      this.slides[this.activeSlideIndex].classList.remove("actived");
      this.updateAriaHidden();
      this.activeSlideIndex = (this.activeSlideIndex + 1) % this.slides.length;
      this.slides[this.activeSlideIndex].classList.add("actived");
      this.updateAriaHidden();
      this.url =
        this.slides[this.activeSlideIndex].getAttribute("data-url") || "";
    }
  }

  bulletHandler(index: number) {
    if (this.slides.length) {
      this.slides[this.activeSlideIndex].classList.remove("actived");
      this.updateAriaHidden();
      this.activeSlideIndex = index;
      this.slides[this.activeSlideIndex].classList.add("actived");
      this.updateAriaHidden();
      this.url =
        this.slides[this.activeSlideIndex].getAttribute("data-url") || "";
    }
  }

  updateAriaHidden() {
    this.slides.forEach((slide, index) => {
      const isActive = index === this.activeSlideIndex;
      slide.setAttribute("aria-hidden", isActive ? "false" : "true");
    });
  }

  openUrl(event: Event) {
    if (!this.isDragging && this.url && this.url.trim() !== "") {
      window.open(this.url, "_blank");
    }
    event.stopPropagation(); // Evita a propagação do evento de clique
  }
}
