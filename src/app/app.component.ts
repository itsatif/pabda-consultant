import {Component, ElementRef, Inject, OnInit, PLATFORM_ID} from '@angular/core';
import {CommonModule, isPlatformBrowser} from '@angular/common';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {FooterComponent} from './footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'pabda-consultant';

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private elementRef: ElementRef) {
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      // new WOW().init();
    }
  }

  scrollToTop(): void {
    this.elementRef.nativeElement.ownerDocument.defaultView.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
}
