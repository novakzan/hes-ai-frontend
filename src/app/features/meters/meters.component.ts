import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-meters',
  template: `
    <h1 class="text-3xl font-bold text-primary mb-4">Smart Meters</h1>
    <div class="alert alert-info">Meter list and readings will be shown here.</div>
  `,
})
export class MetersComponent {}
