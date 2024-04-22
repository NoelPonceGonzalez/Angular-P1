import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators, ReactiveFormsModule, FormGroup } from '@angular/forms';
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
  isFormSubmitted: boolean = false;

  products: any[] = [];

  constructor(private dataService: DataService) {
    this.productForm = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(5)]),
      price: new FormControl('', [Validators.required, Validators.max(750)]),
      desc: new FormControl('', [Validators.required, Validators.maxLength(50)]),
      sale: new FormControl(''),
      date: new FormControl('', [Validators.required]),
    })
  }
  ngOnInit() { }

  add() {
    this.dataService.sendProducts([this.productForm.value]);
    this.productForm.reset();
  }
}