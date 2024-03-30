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
    file: new FormControl(''),
  });

  /**max file size 5mb*/
  maxSize = 5 * 1024 * 1024;

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private formService: FormService,
  ) {}

  convertFormGroupToFormData(formGroup: FormGroup): FormData {
    const formData = new FormData();
    const combinedName = `${formGroup.get('firstName')?.value} ${formGroup.get('lastName')?.value}`;

    // Append combined name
    formData.append('name', combinedName);

    Object.keys(formGroup.controls).forEach((key) => {
      if (key !== 'firstName' && key !== 'lastName') {
        const controlValue = formGroup.get(key)?.value;
        if (key === 'file' && controlValue) {
          if (controlValue instanceof FileList) {
            Array.from(controlValue).forEach((file: File, index: number) => {
              formData.append(`${key}[${index}]`, file, file.name);
            });
          } else if (controlValue instanceof File) {
            formData.append(key, controlValue, controlValue.name);
          }
        } else {
          formData.append(key, controlValue);
        }
      }
    });
    return formData;
  }

  onSubmit(): void {
    const formData = this.careerFormGroup.value;
    this.snackBar.open('Form Submitted Successfully', 'OK', { duration: 3000 });
    const form = new FormData(formData);
    const formDataJson = JSON.parse(JSON.stringify(formData));
    const careerFormData = this.convertFormGroupToFormData(
      this.careerFormGroup,
    );
    this.formService.submitCareerQuery(careerFormData).subscribe();
    this.router.navigate(['thank-you-page']);
    console.log(formDataJson);
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    if (file) {
      const fileSize = file.size;
      if (fileSize > this.maxSize) {
        event.target.value = null;
        this.snackBar.open('Please select a file less than 3MB', 'OK', {
          duration: 3000,
        });
      } else {
        this.careerFormGroup.controls?.['file'].setValue(file);
      }
    }
  }
}
