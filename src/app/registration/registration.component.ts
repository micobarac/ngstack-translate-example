import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  form: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    // Create the password field separately so we can pass it to our custom validator.
    const passwordControl = this.formBuilder.control('', [Validators.required, Validators.minLength(6)]);
    this.form = this.formBuilder.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: passwordControl,
      // We pass the password field to compare with password confirm field.
      passwordConfirm: ['', [Validators.required, this.validatePasswordConfirm(passwordControl)]]
    });
  }

  // Accept an instance of FormControl to match against the FormControl it is validating.
  validatePasswordConfirm(passwordControl: FormControl) {
    return (passwordConfirmControl: FormControl) => {
      // Whenever the passwordControl changes, we update the value and validity or passwordConfirmControl.
      passwordControl.valueChanges.subscribe(() => {
        passwordConfirmControl.updateValueAndValidity();
      });
      // If the 2 fields' values are not equal then we return an error.
      if (passwordConfirmControl.value && passwordConfirmControl.value !== passwordControl.value) {
        return {
          validatePasswordConfirm: {
            valid: false
          }
        };
      }
    };
  }
}
