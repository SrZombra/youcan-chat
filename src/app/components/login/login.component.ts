import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Login } from '../../models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  constructor(private router: Router, private route: ActivatedRoute) {}
  loading:boolean = false

  formLogin: FormGroup = new FormGroup({
    username: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required),
  });

  login(): void {
    let userLogin: Login = this.formLogin.getRawValue()
    this.loading = true
    setTimeout(() => {
      if(userLogin.password === "12345") {
        this.loading = false
        alert('Credenciales erroneas')
      } else {
        this.router.navigate(['/welcome']);
      }
    }, 3000)
  }
}
