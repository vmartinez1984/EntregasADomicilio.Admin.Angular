import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  role: any;
  private readonly llaveToken = 'token'
  private readonly llaveExpiracion = 'expiracion'

  constructor() { }

  public estaAutorizado(): boolean {
    if (this.role) {
      return this.obtenerRol() === this.role
    } else {
      return this.estaLogueado()
    }
  }

  obtenerRol(): string {
    return "administrador"
  }

  estaLogueado() {
    const token = localStorage.getItem(this.llaveToken)
    if (!token)
      return false

    const expiracion = localStorage.getItem(this.llaveExpiracion)
    const fechaDeExpiracion = new Date(expiracion!)
    if (fechaDeExpiracion <= new Date()) {
      this.cerrarSesion()
      return false
    }

    return true
  }

  cerrarSesion() {
    localStorage.removeItem(this.llaveExpiracion)
    localStorage.removeItem(this.llaveToken)
  }

}