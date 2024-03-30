import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormService } from '../get-in-touch-form/form.service';

@Component({
  selector: 'app-contact-us-form',
  standalone: true,
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSnackBarModule,
  ],
  templateUrl: './contact-us-form.component.html',
  styleUrl: './contact-us-form.component.css',
})
export class ContactUsFormComponent implements OnInit {
  getInTouchFormGroup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    query: new FormControl('', [Validators.required]),
  });

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private formService: FormService,
  ) {}

  ngOnInit(): void {}

  submitForm(): void {
    const formData = this.getInTouchFormGroup.value;
    const formDataJson = JSON.parse(JSON.stringify(formData));
    console.log(formDataJson);
    this.formService.submitContactQuery(formDataJson).subscribe();
    this.snackBar.open('Form submitted sucessfully', 'OK', { duration: 3000 });
    this.router.navigate(['thank-you-page']);
  }
}
