import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-get-in-touch-form',
  standalone: true,
  imports: [ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
  FormsModule],
  templateUrl: './get-in-touch-form.component.html',
  styleUrl: './get-in-touch-form.component.css',
  encapsulation:ViewEncapsulation.None
})
export class GetInTouchFormComponent implements OnInit {
  getInTouchFormGroup:FormGroup = new FormGroup({
    name:new FormControl('',[Validators.required]),
    phoneNumber:new FormControl('',[Validators.required]),
    email:new FormControl('',[Validators.email,Validators.required]),
    query:new FormControl('',[Validators.required])
})

  constructor(private fb: FormBuilder){}

  ngOnInit(): void {}
  
  onSubmit(): void {
    const formData = this.getInTouchFormGroup.value;
    const formDataJson = JSON.parse(JSON.stringify(formData));
    console.log(formDataJson);
  }
}
