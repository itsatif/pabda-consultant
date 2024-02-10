import {CommonModule} from '@angular/common';
import {Component} from '@angular/core';

@Component({
  selector: 'app-downloadables',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './downloadables.component.html',
  styleUrl: './downloadables.component.css',
})
export class DownloadablesComponent {
  downloadsList: any[] = []
  // downloadsList: any[] = [
  //   {
  //     title: 'Lorem Ipsum is simply dummy text of the printing',
  //     image: 'assets/img/do-1.jpg',
  //   },
  //   {
  //     title: 'Lorem Ipsum is simply dummy text of the printing',
  //     image: 'assets/img/do-2.jpg',
  //   },
  //   {
  //     title: 'Lorem Ipsum is simply dummy text of the printing',
  //     image: 'assets/img/do-3.jpg',
  //   },
  // ];
}
