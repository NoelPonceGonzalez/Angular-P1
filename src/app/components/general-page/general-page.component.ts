import { Component } from '@angular/core';

import { HeaderComponent } from '../header/header.component';
import { HomeComponent } from '../home/home.component';
import { FooterComponent } from '../footer/footer.component';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-general-page',
  standalone: true,
  imports: [HeaderComponent, HomeComponent, FooterComponent, LoginComponent],
  templateUrl: './general-page.component.html',
  styleUrl: './general-page.component.scss'
})
export class GeneralPageComponent {

}
