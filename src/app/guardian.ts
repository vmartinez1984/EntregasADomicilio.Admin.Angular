import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AutorizacionService } from './authorize/authorize.service';

@Injectable({
  providedIn: 'root'
})
export class Guardian implements CanActivate {

  constructor(private seguridadService: AutorizacionService,
    private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if (this.seguridadService.obtenerRol() === 'Administracion'){
        return true;
      }

    this.router.navigate(['/iniciarSesion']);      
      return false;
  }
  
}

@Injectable({
  providedIn: 'root'
})
export class EstaLogueadoGuard implements CanActivate {

  constructor(private seguridadService: AutorizacionService,
    private router: Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if (this.seguridadService.estaIniciadaLaSesion()){
        return true;
      }

    this.router.navigate(['/iniciarSesion']);      
      return false;
  }
  
}