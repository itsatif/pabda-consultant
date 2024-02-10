import {Component} from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatSnackBar, MatSnackBarModule} from '@angular/material/snack-bar';

@Component({
  selector: 'app-careers',
  standalone: true,
  imports: [ReactiveFormsModule, FormsModule, MatSnackBarModule],
  templateUrl: './careers.component.html',
  styleUrl: './careers.component.css'
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
    resume: new FormControl('')
  });

  constructor(private snackBar: MatSnackBar) {
  }

  onSubmit(): void {
    const formData = this.careerFormGroup.value;
    this.snackBar.open('Form Submitted Successfully', 'OK', {duration: 3000})
    const form = new FormData(formData);
    console.log(form)
  }
}
