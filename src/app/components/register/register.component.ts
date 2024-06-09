import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Register } from '../../models/register';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {
  loading: boolean = false

  formRegister: FormGroup = new FormGroup({
    fullname: new FormControl(null, Validators.required),
    email: new FormControl(null, [ Validators.required, Validators.email ]),
    phone: new FormControl(null, [ Validators.required ]),
    disc_type: new FormControl(null, [ Validators.required ]),
    rol: new FormControl(null, [ Validators.required ]),
    password: new FormControl(null, [ Validators.required ]),
    confirm_password: new FormControl(null, [ Validators.required ])
  });

  constructor(private router: Router, private route: ActivatedRoute) {}

  register(event: Event): void {
    let infoRegister: Register = this.formRegister.getRawValue()
    console.log(infoRegister.fullname)
    console.log(infoRegister.email)
    console.log(infoRegister.phone)
    console.log(infoRegister.disc_type)
    console.log(infoRegister.rol)
    console.log(infoRegister.password)
    console.log(infoRegister.confirm_password)
    event.preventDefault()
    this.loading = true
    setTimeout(() => {
      this.loading = false
      this.router.navigate(['/welcome']);
    }, 3000)
  }
}

