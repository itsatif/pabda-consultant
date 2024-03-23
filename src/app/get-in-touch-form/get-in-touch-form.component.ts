import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormService } from './form.service';

@Component({
  selector: 'app-get-in-touch-form',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    FormsModule,
    MatSnackBarModule,
  ],
  templateUrl: './get-in-touch-form.component.html',
  styleUrl: './get-in-touch-form.component.css',
  encapsulation: ViewEncapsulation.None,
})
export class GetInTouchFormComponent implements OnInit {
  getInTouchFormGroup: FormGroup = new FormGroup({
    name: new FormControl('', [Validators.required]),
    phoneNumber: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    query: new FormControl('', [Validators.required]),
  });

  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private formService: FormService,
  ) {}

  ngOnInit(): void {}

  onSubmit(): void {
    const formData = this.getInTouchFormGroup.value;
    const formDataJson = JSON.parse(JSON.stringify(formData));
    this.snackBar.open('Form Submited Succesfully', 'OK', { duration: 3000 });
    this.formService.submitForm(formDataJson).subscribe();
    this.router.navigate(['thank-you-page']);
    console.log(formDataJson);
  }
}
