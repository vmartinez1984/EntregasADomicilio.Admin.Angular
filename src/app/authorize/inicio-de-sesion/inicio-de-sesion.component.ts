import { Component } from '@angular/core';
import { InicioDeSesionDto } from '../inicio-de-sesion';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AutorizacionService } from '../authorize.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio-de-sesion',
  templateUrl: './inicio-de-sesion.component.html',
  styleUrls: ['./inicio-de-sesion.component.css']
})
export class InicioDeSesionComponent {
  formGroup: FormGroup
  estaCargando: boolean = false

  constructor(
    private servicio: AutorizacionService,
    private formBuild: FormBuilder,
    //private snackbar: MatSnackBar,
    private router: Router
  ) {
    this.formGroup = this.formBuild.group({
      correo: ['', { validartors: [Validators.required, Validators.email] }],
      contrasenia: ['', { validartors: [Validators.required] }]
    })
  }

  iniciarSesion() {
    var inicioDeSesion: InicioDeSesionDto = {
      correo: this.formGroup.value.correo,
      contrasenia: this.formGroup.value.contrasenia
    }
    this.estaCargando = true;
    this.habilitarFormulario(!this.estaCargando!)
    this.servicio.inicioDeSesion.iniciarSesion(inicioDeSesion).subscribe({
      next: (data) => {
        console.log(data)
        this.estaCargando = false
        //this.habilitarFormulario(true)
        this.servicio.guardarToken(data)
        //this.snackbar.open("Bienvenido " + this.servicio.sesion.obtenerCampo("Nombre"), "Ok", { duration: 5000 })
        this.router.navigate(['/'])
      }, error: (data) => {
        //console.log(data.error.mensaje)
        //this.snackbar.open(data.error.mensaje, ":(", { duration: 5000 })
        this.estaCargando = false
        this.habilitarFormulario(true)
      }
    })
  }

  habilitarFormulario(habilitar: boolean) {
    if (habilitar) {
      this.formGroup.get('correo')?.enable()
      this.formGroup.get('contrasenia')?.enable()
    } else {
      this.formGroup.get('correo')?.disable()
      this.formGroup.get('contrasenia')?.disable()
    }
  }
}
