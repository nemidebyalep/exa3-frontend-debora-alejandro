import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth.service';
import Swal from 'sweetalert2';

import { resolveSanitizationFn } from '@angular/compiler/src/render3/view/template';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
  constructor(private authService: AuthService, private router:Router){}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(!this.authService.isAuthenticated()){
      this.authService.logout();
      this.router.navigate(['/login']);
      return false;
  }
  let role = next.data['role'] as string;
  
  for(let r of role) { 
    console.log(r);
    if (this.authService.hasRole(r)){
    return true;
  }}
    
    Swal.fire('Acceso denegado', `Hola ${this.authService.usuario.username} no tienes acceso a este recurso`, 'warning')
    this.router.navigate(['/listar']);
    return false;
}
}