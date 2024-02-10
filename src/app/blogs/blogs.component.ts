import {CommonModule} from '@angular/common';
import {Component, OnInit} from '@angular/core';
import {BlogGridComponent} from '../blog-grid/blog-grid.component';

@Component({
  selector: 'app-blogs',
  standalone: true,
  imports: [CommonModule, BlogGridComponent],
  templateUrl: './blogs.component.html',
  styleUrl: './blogs.component.css',
})
export class BlogsComponent implements OnInit {
  ngOnInit(): void {
  }
}
