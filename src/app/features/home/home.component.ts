import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-home',
  template: `
    <h1 class="text-3xl font-bold text-primary mb-4">Dashboard</h1>
    <div class="card bg-base-100 border border-base-300">
      <div class="card-body">
        <p class="text-base-content/80">
          Welcome to <span class="font-semibold text-secondary">HES AI</span> —
          choose a section from the navbar.
        </p>
      </div>
    </div>
  `,
})
export class HomeComponent {}
