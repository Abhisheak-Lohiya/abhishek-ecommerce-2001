




import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  isSubmitting = false;
  loginError = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      rememberMe: [false]
    });
  }

  onSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }

    this.isSubmitting = true;
    this.loginError = '';

    // Here you would call your authentication service
    // For demo purposes, we'll simulate a login
    setTimeout(() => {
      const { email, password } = this.loginForm.value;
      
      // For demonstration - in real app you'd use an auth service
      if (email === 'demo@example.com' && password === 'password123') {
        // Save token to localStorage or a service
        localStorage.setItem('isLoggedIn', 'true');
        
        // Navigate to dashboard after successful login
        this.router.navigate(['/dashboard']);
        
        // Reset the form after successful login
        this.loginForm.reset();

      } else {
        this.loginError = 'Invalid email or password';
      }

      this.isSubmitting = false;
    }, 1000); // Simulate async login process
  }
}
