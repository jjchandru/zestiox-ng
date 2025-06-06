import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from './registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup;
  submitted = false;
  successMessage = '';
  errorMessage = '';

  constructor(private fb: FormBuilder, private regService: RegistrationService) {
    this.registrationForm = this.fb.group({
      name: ['', Validators.required],
      mobile: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      password: ['', [Validators.required, Validators.minLength(8),
        Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).+$/)
      ]],
      confirm_password: ['', Validators.required]
    }, { validators: this.passwordsMatchValidator });
  }

  passwordsMatchValidator(form: FormGroup) {
    return form.get('password')!.value === form.get('confirm_password')!.value ? null : { mismatch: true };
  }

  get f() { return this.registrationForm.controls; }

  onSubmit() {
    this.submitted = true;
    this.successMessage = '';
    this.errorMessage = '';
    if (this.registrationForm.invalid) return;
    const { name, mobile, password, confirm_password } = this.registrationForm.value;
    this.regService.register({ name, mobile, password, confirm_password }).subscribe({
      next: (res) => {
        if (res.success) {
          this.successMessage = res.message;
          this.registrationForm.reset();
          this.submitted = false;
        } else {
          this.errorMessage = res.message;
        }
      },
      error: (err) => {
        this.errorMessage = err.error?.message || 'Registration failed. Try again.';
      }
    });
  }
}
