import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  isSidebarVisible = false;
  constructor(private el: ElementRef) {}

  /**
   * @description Close sidebar when clicking outside of it
   */
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event): void {
    if (!this.el.nativeElement.contains(event.target)) {
      this.isSidebarVisible = false;
    }
  }

  /**
   * @description Stop event propagation when clicking inside the sidebar to prevent closing
   */
  onSidebarClick(event: Event): void {
    event.stopPropagation();
  }
  toggleSidebar() {
    this.isSidebarVisible = !this.isSidebarVisible;
  }
}
