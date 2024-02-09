import { Component, ElementRef, Inject, OnInit, Renderer2, ViewChild } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BlogGridComponent } from '../blog-grid/blog-grid.component';
import { WowService } from '../shared-services/wow.service';
import { HapticFeedbackDirective } from '../../directives/haptic-feedback.directive';
declare var $: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, BlogGridComponent, HapticFeedbackDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  isSoundOn: boolean = false;
  barsHeight = [
    [2, 13],
    [5, 22],
    [17, 8],
    [4, 18],
    [11, 3],
  ];
  @ViewChild('heroSlides') heroSlides: ElementRef;
  interval: any;
  constructor(@Inject(WowService) private wowService: WowService,private renderer: Renderer2) {}
  ngOnInit(): void {
    this.wowService.initWow();
    this.playOSSound();
    this.equalizerAnimation('.equalizer', 180, this.barsHeight);
  }

  randomBetween(min: number, max: number): number {
    return min + Math.random() * (max - min);
  }

  equalizerAnimation(
    selector: string,
    speed: number,
    barsHeight: number[][]
  ): void {
    const equalizer = document.querySelector(selector);
    if (!equalizer) return;

    let animationInterval: NodeJS.Timeout;

    function animateBars(): void {
      const spans = equalizer.querySelectorAll('span');
      spans.forEach((span, idx) => {
        const height = this.randomBetween(
          barsHeight[idx][0],
          barsHeight[idx][1]
        );
        (span as HTMLElement).style.height = `${height}px`;
      });
    }

    function startAnimation(): void {
      if (animationInterval) return;
      animateBars();
      animationInterval = setInterval(animateBars.bind(this), speed);
    }

    function stopAnimation(): void {
      if (!animationInterval) return;
      clearInterval(animationInterval);
      animationInterval = null;
    }

    animationInterval = setInterval(animateBars.bind(this), speed);

    equalizer.addEventListener('click', function () {
      equalizer.classList.toggle('paused');
      if (equalizer.classList.contains('paused')) {
        stopAnimation();
      } else {
        startAnimation();
      }
    });
  }

  /**
   * @description Plays system sound for macOS.
   */
  playOSSound(): void {
    const audio: HTMLAudioElement = new Audio('assets/img/audio-new-11.mp3');
    this.isSoundOn = !this.isSoundOn;
    audio.volume = this.isSoundOn ? 1 : 0;
    if (this.isSoundOn) {
      audio.play().then().catch();
    } else {
      audio.pause();
      this.equalizerAnimation('.equalizer', 180, this.barsHeight);
    }
  }

  initializeOwlCarousel(): void {
    if ($.fn.owlCarousel) {
      const welcomeSlide = $(this.heroSlides.nativeElement);

      welcomeSlide.owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        nav: true,
        navText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 1000
      });

      welcomeSlide.on('translate.owl.carousel', () => {
        const slideLayer = $('[data-animation]', this.heroSlides.nativeElement);
        slideLayer.each((index, element) => {
          this.renderer.removeClass(element, 'animated ' + element.dataset.animation);
          this.renderer.setStyle(element, 'opacity', '0');
        });
      });

      welcomeSlide.on('translated.owl.carousel', () => {
        const activeSlide = $('.owl-item.active', this.heroSlides.nativeElement);
        const slideLayer = $('[data-animation]', activeSlide);
        slideLayer.each((index, element) => {
          this.renderer.addClass(element, 'animated ' + element.dataset.animation);
          this.renderer.setStyle(element, 'opacity', '1');
        });
      });

      $('[data-delay]', this.heroSlides.nativeElement).each((index, element) => {
        const animDelay = element.dataset.delay;
        this.renderer.setStyle(element, 'animation-delay', animDelay);
      });

      $('[data-duration]', this.heroSlides.nativeElement).each((index, element) => {
        const animDuration = element.dataset.duration;
        this.renderer.setStyle(element, 'animation-duration', animDuration);
      });

      const dot = $('.hero-slides .owl-dot', this.heroSlides.nativeElement);
      dot.each((index, element) => {
        const dotNumber = index + 1;
        if (dotNumber <= 9) {
          $(element).html('0').append(dotNumber);
        } else {
          $(element).html(dotNumber);
        }
      });
    }
  }
}
