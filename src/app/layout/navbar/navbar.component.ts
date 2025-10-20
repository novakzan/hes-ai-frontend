import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
})
export class NavbarComponent implements OnInit {
  currentTheme = 'gridlight';

  ngOnInit() {
    const saved = localStorage.getItem('theme') ?? 'gridlight';
    document.documentElement.setAttribute('data-theme', saved);
    this.currentTheme = saved;
  }

  onThemeChange(event: Event) {
    const theme = (event.target as HTMLSelectElement).value;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    this.currentTheme = theme;
  }
}
