import { Component } from '@angular/core';

import { InputSwitchModule } from 'primeng/inputswitch';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [InputSwitchModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  toggleDarkTheme(): void {
    document.body.classList.toggle('dark-theme')
  }
}
