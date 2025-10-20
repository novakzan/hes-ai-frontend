import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-audit-logs',
  template: `
    <h1 class="text-3xl font-bold text-primary mb-4">Audit Logs</h1>
    <div class="alert alert-info">
      System actions and ingestion logs will appear here.
    </div>
  `,
})
export class AuditLogsComponent {}
