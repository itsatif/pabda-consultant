import {Component} from '@angular/core';
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-service-listing',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './service-listing.component.html',
  styleUrl: './service-listing.component.css'
})
export class ServiceListingComponent {

}
