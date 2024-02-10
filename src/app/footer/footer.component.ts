import { Component } from '@angular/core';
import { GetInTouchFormComponent } from '../get-in-touch-form/get-in-touch-form.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    GetInTouchFormComponent,
    MatSnackBarModule,
  ],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css',
})
export class FooterComponent {
  formData = {
    name: '',
    phoneNumber: '',
    email: '',
    query: '',
  };
  constructor(private snackBar: MatSnackBar) {}
  submitForm(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted:', this.formData);
      this.snackBar.open('Your Form has successfully submitted', 'OK', {
        duration: 3000,
      });
    } else {
      this.snackBar.open('Please fill all the details in form', 'OK', {
        duration: 3000,
      });
    }
  }
}
