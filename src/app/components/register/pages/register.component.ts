import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
})
export class RegisterComponent {
  title = 'Recordámelo';
  form = {
    correo: 'Correo',
    contrasena: 'Contraseña',
    confContrasena: 'Confirmar contraseña',
    ingresar: 'Crear',
    noCuenta: '¿Ya estás registrado?',
    registro: 'Ingresa'
  }

  constructor(private router: Router, private toastr: ToastrService) { }

  goToIngresar() {
    this.router.navigate(['/session']);
    this.showSuccess();
  }

  showSuccess() {
    this.toastr.success('El registro se ha realizado satisfactoriamente.', '¡Éxito!');
  }
}
