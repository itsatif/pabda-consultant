import { Component } from '@angular/core';
import { GetInTouchFormComponent } from '../get-in-touch-form/get-in-touch-form.component';
import { FormsModule, NgForm, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router, RouterLink } from '@angular/router';
import { FormService } from '../get-in-touch-form/form.service';
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    CommonModule,
    GetInTouchFormComponent,
    MatSnackBarModule,
    RouterLink,
    HttpClientModule,
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

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private formService: FormService,
  ) {}

  submitForm(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted:', this.formData);
      const formDataJson = JSON.parse(JSON.stringify(this.formData));
      this.formService.submitContactQuery(formDataJson).subscribe();
      this.snackBar.open('Your Form has successfully submitted', 'OK', {
        duration: 3000,
      });
      this.router.navigate(['thank-you-page']);
    } else {
      this.snackBar.open('Please fill all the details in form', 'OK', {
        duration: 3000,
      });
    }
  }
}
