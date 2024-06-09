import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrl: './welcome.component.scss'
})
export class WelcomeComponent {
  loading: boolean = false

  constructor(private router: Router, private route: ActivatedRoute) {}

  register(event: Event): void {
    event.preventDefault()
    this.loading = true
    setTimeout(() => {
      this.loading = false
      this.router.navigate(['/home']);
    }, 3000)
  }
}
