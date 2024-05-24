import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { DataService } from '../../service/data-service.service';

@Component({
  selector: 'app-fomr-add-proyect',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './fomr-add-proyect.component.html',
  styleUrl: './fomr-add-proyect.component.scss'
})
export class FomrAddProyectComponent {
  productForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private dataService: DataService
  ) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required]],
      description: ['', Validators.required],
      price: ['', Validators.required],
      date: ['', Validators.required],
    });
  }

  onSubmit(): void {
    if (this.productForm.valid) {
      const { name, description, price, date } = this.productForm.value;
      this.dataService.addProduct(name, description, price, date).subscribe(
        (response: any) => {
          console.log('Producto agregado:', response);
          this.router.navigate(['/proyects']);
        },
        (error: any) => {
          console.error('Error al agregar producto:', error);
        }
      );
    } else {
      this.productForm.markAllAsTouched();
    }
  }
}
