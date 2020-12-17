import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import {Observable, of , throwError} from 'rxjs';
import {catchError,  map} from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  private httpHeaders = new HttpHeaders({ 'Content-Type':'application/json'});
  private productoUrl:string = 'http://localhost:9090/productos';//endpoint
  constructor(private http: HttpClient, private router:Router,
    private authService: AuthService) { }
    private addAuthorizationHeader(){
      let token = this.authService.token;
      if(token!=null){
        return this.httpHeaders.append('Authorization','Bearer '+ token);
      }
      return this.httpHeaders;
    }
    private isNoAutorization(e): boolean{
      if(e.status==401 || e.status==403){
        this.router.navigate(['/login'])
        return true;
      }
      return false;
    }
    getProductos():Observable<any>{
      return this.http.get(this.productoUrl+'/all',{headers:this.addAuthorizationHeader()}).pipe(
        catchError(e =>{
          this.isNoAutorization(e);
          return throwError(e);
        })
      );
    }









}
