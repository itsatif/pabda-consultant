import { Component, OnInit } from '@angular/core';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BlogGridComponent } from '../blog-grid/blog-grid.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CarouselModule,BlogGridComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent implements OnInit {
  constructor() {}
  ngOnInit(): void {}
}
