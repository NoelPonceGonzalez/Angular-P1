import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../auth.service'; // Asegúrate de que la ruta es correcta

@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private router: Router,
    private authService: AuthService  // Inyecta el servicio aquí
  ) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      name: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      const { email, name, password } = this.loginForm.value;
      this.authService.login(email, name, password).subscribe(
        (response: any) => {
          // Manejar la respuesta del backend, por ejemplo, redirigir al usuario
          this.router.navigate(['/ruta-destino']);
        },
        (error: any) => {
          // Manejar errores
          console.error(error);
        }
      );
    }
  }
}
