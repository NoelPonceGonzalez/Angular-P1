import { Component, effect } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { DataService } from '../../service/data-service.service';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-proyects',
  standalone: true,
  imports: [HeaderComponent, CommonModule,RouterLink, FooterComponent],
  templateUrl: './proyects.component.html',
  styleUrl: './proyects.component.scss'
})
export class ProyectsComponent {
  products: any[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getProducts()
    this.products = this.dataService.productsSignal();
    console.log(this.products); // Ensure data is available here
    console.log(this.products[0]); // Access the first element here
  }
}
