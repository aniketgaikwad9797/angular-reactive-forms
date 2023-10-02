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

    this.reactiveForm.valueChanges.subscribe((value) => {
      console.log(value);
    });
    this.reactiveForm.statusChanges.subscribe((value) => {
      console.log(value);
    });
    // this.reactiveForm.setValue({
    //   userDetails: {
    //     userName: 'Khabib',
    //     emailAddress: 'khabib@goat.com',
    //   },
    //   gender: 'male',
    // });
    this.reactiveForm.patchValue({
      userDetails: {
        emailAddress: 'abc@abc.com',
      },
      gender: 'female',
    });
  }

  onFormSubmit() {
    this.reactiveForm.reset();
    console.log(this.reactiveForm);
  }
}
