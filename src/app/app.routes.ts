import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { ConcentratorsComponent } from './features/concentrators/concentrators.component';
import { MetersComponent } from './features/meters/meters.component';
import { ImportDevicesComponent } from './features/import-devices/import-devices.component';
import { AuditLogsComponent } from './features/audit-logs/audit-logs.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'concentrators', component: ConcentratorsComponent },
  { path: 'meters', component: MetersComponent },
  { path: 'import-devices', component: ImportDevicesComponent },
  { path: 'audit-logs', component: AuditLogsComponent },
  { path: '**', redirectTo: '' },
];
