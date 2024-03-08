import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-session',
  templateUrl: './session.component.html',
  styleUrls: ['./session.component.scss']
})
export class SessionComponent {

  title = 'Recordámelo';
  form = {
    correo: 'Correo',
    contrasena: 'Contraseña',
    recordarContrasena: '¿Olvidó su contraseña?',
    ingresar: 'Ingresar',
    noCuenta: '¿No tienes una cuenta?',
    registro: 'Registrate'
  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(private router: Router) { }

  goToIngresar() {
    this.router.navigate(['/grid']);
  }


}
