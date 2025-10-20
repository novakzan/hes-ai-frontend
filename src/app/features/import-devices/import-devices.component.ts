import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-import-devices',
  template: `
    <h1 class="text-3xl font-bold text-primary mb-4">Import Devices</h1>
    <div class="alert alert-warning">
      Upload device data (CSV/XLSX) — feature in development.
    </div>
  `,
})
export class ImportDevicesComponent {}
