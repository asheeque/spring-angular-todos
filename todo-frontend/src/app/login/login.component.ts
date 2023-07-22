import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  username: string = 'asheeque';
  password: string = '';
  errorMessage: string = 'Invalid credentials';
  invalidLogin: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  handleLogin(): void {
    if (this.username === 'asheeque' && this.password === '123456') {
      this.invalidLogin = false;
      this.router.navigate(['welcome',this.username])
    } else {
      this.invalidLogin = true;
    }
    console.log(this.username);
  }
}
