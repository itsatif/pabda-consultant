import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-get-in-touch-form',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule],
  templateUrl: './get-in-touch-form.component.html',
  styleUrl: './get-in-touch-form.component.css'
})
export class GetInTouchFormComponent implements OnInit {
  myForm: FormGroup;

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      phoneNumber: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      query: ['']
    });
  }
  
  onSubmit(): void {
    if (this.myForm.valid) {
      // Perform actions with form data (e.g., submit to a server)
      console.log(this.myForm.value);
    } else {
      // Handle invalid form
      alert('Please fill out all required fields with valid values.');
    }
  }
}
