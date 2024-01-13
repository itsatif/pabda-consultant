import { Component } from '@angular/core';
import { GetInTouchFormComponent } from '../get-in-touch-form/get-in-touch-form.component';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [GetInTouchFormComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {

}
