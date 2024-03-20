import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upcoming-events',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './upcoming-events.component.html',
  styleUrl: './upcoming-events.component.css',
})
export class UpcomingEventsComponent implements OnInit {
  blogPosts = [];
  // blogPosts = [
  //   {
  //     imgSrc: 'assets/img/blog-img4.jpg',
  //     date: 'June 25, 2024',
  //     title: 'Lorem Ipsum is simply dummy text of the printing post1',
  //     content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  //   },
  //   {
  //     imgSrc: 'assets/img/blog-img5.jpg',
  //     date: 'April 25, 2024',
  //     title: 'Lorem Ipsum is simply dummy text of the printing post2',
  //     content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  //   },
  //   {
  //     imgSrc: 'assets/img/blog-img6.jpg',
  //     date: 'June 25, 2024',
  //     title: 'Lorem Ipsum is simply dummy text of the printing post3',
  //     content: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
  //   }
  // ];
  isSoundOn: boolean = false;
  barsHeight = [
    [2, 13],
    [5, 22],
    [17, 8],
    [4, 18],
    [11, 3],
  ];

  ngOnInit(): void {
    // this.equalizerAnimation('.equalizer', 180, this.barsHeight);
  }

  randomBetween(min: number, max: number): number {
    return min + Math.random() * (max - min);
  }

  equalizerAnimation(
    selector: string,
    speed: number,
    barsHeight: number[][],
  ): void {
    const equalizer = document.querySelector(selector);
    if (!equalizer) return;

    let animationInterval: NodeJS.Timeout;

    function animateBars(): void {
      const spans = equalizer.querySelectorAll('span');
      spans.forEach((span, idx) => {
        const height = this.randomBetween(
          barsHeight[idx][0],
          barsHeight[idx][1],
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
}
