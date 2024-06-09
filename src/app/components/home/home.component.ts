import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  loading: boolean = false

  constructor(private router: Router, private route: ActivatedRoute) {}

  register(event: Event): void {
    event.preventDefault()
    this.loading = true
    setTimeout(() => {
      this.loading = false
      this.router.navigate(['/chat-b']);
    }, 3000)
  }
}
