import { Component } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
