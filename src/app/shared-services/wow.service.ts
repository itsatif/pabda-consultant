import { isPlatformBrowser } from '@angular/common';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
declare var WOW: any;
@Injectable({
  providedIn: 'root',
})
export class WowService {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  initWow() {
    if (isPlatformBrowser(this.platformId)) {
      new WOW().init();
      document.addEventListener("DOMContentLoaded", function() {
        const slides = document.querySelectorAll(".hero-slides-content");
    
        function activateSlide(index) {
            slides.forEach((slide, i) => {
                if (i === index) {
                    slide.classList.add("active");
                } else {
                    slide.classList.remove("active");
                }
            });
        }
    
        // Example of triggering the activateSlide function when slide changes
        const owlCarousel = document.querySelector(".owl-carousel");
        owlCarousel.addEventListener("changed.owl.carousel", function(event) {
            const currentIndex = event?.['item'].index;
            activateSlide(currentIndex);
        });
    });
    }
  }
}
