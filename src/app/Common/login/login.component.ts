import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  username: string = '';
  password: string = '';

  onSubmit(): void {
    if (this.username === 'admin' && this.password === 'admin123') {
      localStorage.setItem('authToken', 'exampleToken');
      this.router.navigate(['/dashboard']);
    } else {
      alert('Invalid username or password');
    }
  }
}
