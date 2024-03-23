import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormService } from '../get-in-touch-form/form.service';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MatSnackBarModule],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css',
})
export class CareersComponent {
  careerFormGroup: FormGroup = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', Validators.required),
    phoneNumber: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
    jobTitle: new FormControl('', Validators.required),
    location: new FormControl('', Validators.required),
    linkedinProfile: new FormControl('', Validators.required),
    whyJoin: new FormControl('', Validators.required),
    message: new FormControl(''),
    resume: new FormControl(''),
  });

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private formService: FormService,
  ) {}

  onSubmit(): void {
    const formData = this.careerFormGroup.value;
    this.snackBar.open('Form Submitted Successfully', 'OK', { duration: 3000 });
    const form = new FormData(formData);
    const formDataJson = JSON.parse(JSON.stringify(formData));
    this.formService.submitForm(formDataJson).subscribe();
    this.router.navigate(['thank-you-page']);
    console.log(form);
  }
}
