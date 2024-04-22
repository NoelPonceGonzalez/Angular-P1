import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { InputSwitchModule } from 'primeng/inputswitch';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [InputSwitchModule, RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme')
  }
}
