import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  reactiveForm: FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      userDetails: new FormGroup({
        userName: new FormControl(null, Validators.required),
        emailAddress: new FormControl(null, [
          Validators.required,
          Validators.email,
        ]),
      }),
      gender: new FormControl('male'),
    });
  }

  onFormSubmit() {
    console.log(this.reactiveForm);
  }
}
