import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-recovery',
  templateUrl: './recovery.component.html',
})
export class RecoveryComponent {
  title = 'Recordámelo';
  form = {
    correo: 'Correo',
    contrasena: 'Contraseña',
    confContrasena: 'Confirmar contraseña',
    ingresar: 'Crear',
    noCuenta: '¿No recibió un correo?',
    registro: 'Enviar de nuevo'
  }

  constructor(private router: Router, private toastr: ToastrService) { }

  goToIngresar() {
    this.router.navigate(['/session']);
    this.showSuccess();
  }

  showSuccess() {
    this.toastr.info('Se ha enviado un enlace de recuperación a su correo electrónico.', '');
  }
}
