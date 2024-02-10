import {AfterViewInit, Component, ElementRef, Inject, Renderer2, ViewChild,} from '@angular/core';
import {CarouselModule} from 'ngx-owl-carousel-o';
import {BlogGridComponent} from '../blog-grid/blog-grid.component';
import {WowService} from '../shared-services/wow.service';
import {HapticFeedbackDirective} from '../../directives/haptic-feedback.directive';
import {interval, takeWhile} from 'rxjs';
import {RouterLink} from '@angular/router';

declare var $: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule, BlogGridComponent, HapticFeedbackDirective, RouterLink],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit {
  isSoundOn: boolean = false;
  counters: any[] = [
    {business: 1, max: 50},
    {happyClients: 1, max: 100},
    {respondents: 1, max: 8},
    {surveys: 1, max: 6},
  ];

  barsHeight = [
    [2, 13],
    [5, 22],
    [17, 8],
    [4, 18],
    [11, 3],
  ];
  @ViewChild('heroSlides') heroSlides: ElementRef;
  interval: any;
  duration = 5000;

  constructor(
    @Inject(WowService) private wowService: WowService,
    private renderer: Renderer2
  ) {
  }

  ngAfterViewInit(): void {
    this.wowService.initWow();
    this.playOSSound();
    this.equalizerAnimation('.equalizer', 180, this.barsHeight);
    this.initializeOwlCarousel();
  }

  randomBetween(min: number, max: number): number {
    return min + Math.random() * (max - min);
  }

  increaseCounters() {
    const startTime = new Date().getTime();
    const stepSize = this.duration / 100;

    interval(stepSize)
      .pipe(takeWhile(() => new Date().getTime() - startTime < this.duration))
      .subscribe(() => {
        this.counters = this.counters.map((counter) => {
          Object.keys(counter).forEach((key) => {
            if (key !== 'max') {
              const currentValue = counter[key];
              const maxValue = counter.max;
              const increment = Math.ceil(maxValue / 100);
              if (currentValue < maxValue) {
                counter[key] = Math.min(currentValue + increment, maxValue);
              }
            }
          });
          return counter;
        });
      });
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
    if (this.isSoundOn) {
      audio.play().then().catch();
      audio.volume = 1;
    } else {
      audio.pause();
      audio.volume = 0;
      this.equalizerAnimation('.equalizer', 180, this.barsHeight);
    }
  }

  initializeOwlCarousel(): void {
    const animatedEl: any = document.querySelectorAll('.owl-stage');
    const counterList: number[] = [2160, 2880, 3600];
    animatedEl.forEach((node) => {
      if (node?.style) {
        let counterIndex = 0;
        setInterval(() => {
          if (counterIndex < counterList.length) {
            node.style.transform = `translate3d(-${counterList[counterIndex]}px, 0px, 0px)`;
            counterIndex++;
          } else {
            counterIndex = 0;
          }
        }, 2000);
      }
    });
  }
}
