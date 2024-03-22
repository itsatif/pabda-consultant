import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  PLATFORM_ID,
  Renderer2,
  ViewChild,
} from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BlogGridComponent } from '../blog-grid/blog-grid.component';
import { WowService } from '../shared-services/wow.service';
import { HapticFeedbackDirective } from '../../directives/haptic-feedback.directive';
import { interval, takeWhile } from 'rxjs';
import { RouterLink } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

declare var $: any;

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CarouselModule,
    BlogGridComponent,
    HapticFeedbackDirective,
    RouterLink,
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements AfterViewInit, OnDestroy {
  isSoundOn: boolean = false;
  source: AudioBufferSourceNode | null = null;
  counters: any[] = [
    { business: 1, max: 50 },
    { happyClients: 1, max: 100 },
    { respondents: 1, max: 8 },
    { surveys: 1, max: 6 },
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
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2,
  ) {}

  ngAfterViewInit(): void {
    this.wowService.initWow();
    if (isPlatformBrowser(this.platformId)) {
      this.initializeOwlCarousel();
      this.playOSSound();
      this.equalizerAnimation('.equalizer', 180, this.barsHeight);
      setTimeout((): void => {
        this.playOSSound();
      }, 2000);
    }
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
    barsHeight: number[][],
  ): void {
    const equalizer = document.querySelector(selector);
    if (!equalizer) return;

    let animationInterval: NodeJS.Timeout;

    function randomBetween(min: number, max: number): number {
      return min + Math.random() * (max - min);
    }

    function animateBars(): void {
      const spans = equalizer.querySelectorAll('span');
      spans.forEach((span, idx) => {
        const height = randomBetween(barsHeight[idx][0], barsHeight[idx][1]);
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

    equalizer.addEventListener('click', (event) => {
      event.preventDefault();
      event.stopPropagation();
      equalizer.classList.toggle('paused');
      if (equalizer.classList.contains('paused')) {
        stopAnimation();
        this.isSoundOn = false;
      } else {
        startAnimation();
        this.isSoundOn = true;
      }
      this.playOSSound();
    });
  }

  /**
   * @description Plays system sound for macOS.
   */
  playOSSound(): void {
    const audioContext = new AudioContext();
    const audioUrl = 'assets/img/audio-new-11.mp3';

    if (this.isSoundOn) {
      this.isSoundOn = false;
      fetch(audioUrl)
        .then((response) => response.arrayBuffer())
        .then((buffer) => audioContext.decodeAudioData(buffer))
        .then((decodedData) => {
          this.source = audioContext.createBufferSource();
          this.source.buffer = decodedData;
          this.source.connect(audioContext.destination);
          this.source.start(0);
        })
        .catch((error) => {
          console.error('Error loading and decoding audio:', error);
        });
    } else {
      this.isSoundOn = true;
      if (this.source) {
        this.source.stop();
      }
    }
  }

  initializeOwlCarousel(): void {
    const animatedEl: any = document.querySelectorAll('.owl-stage');
    const owlItem: any = document.querySelectorAll('.owl-item');
    const screenSize: number =
      window.innerWidth > 720 ? 720 : window.innerWidth;
    const width: number = screenSize * 7;
    const counterList: number[] = [3, 4, 5].map((it) => it * screenSize);
    owlItem.forEach((item) => {
      if (item?.style) {
        item.style.width = screenSize + 'px';
      }
    });
    animatedEl.forEach((node) => {
      if (node?.style) {
        let counterIndex = 0;
        node.style.width = width + 'px';
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

  ngOnDestroy(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.isSoundOn = false;
      this.playOSSound();
    }
  }
}
